const 
    express = require('express'),
    glob = require('glob'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    cookieSession = require('cookie-session'),
    helmet = require('helmet'),
    csrf = require('csurf'),
    validator = require('express-validator'),
    expressVue = require('express-vue'),
    oauth2Api = require('./api'),
    path = require('path');

module.exports.init = (app, config) => {
    //Setup
    const env = process.env.NODE_ENV || 'development';
    const router = express.Router();
    let logType = 'dev';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = (env === 'development');
    app.locals.rootPath = process.env.ROOT_PATH;

    const expressVueMiddleware = expressVue.init(config.vueOptions);
    app.use(expressVueMiddleware);

    //Security
    app.use(helmet());
    app.disable('x-powered-by');

    //Api
    const oauth2 = oauth2Api.init();
    app.use('/oauth2', oauth2);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(validator());

    app.use(compress());

    app.use(app.locals.rootPath, express.static(config.root));

    let sessionConfig = config.session;

    if (env === 'production') {
        app.set('trust proxy', 1);
        sessionConfig.cookie.secure = true;
        logType = 'combined';
    }

    if (env === 'development') {
        app.use(logger(logType));
    }

    app.use(cookieParser());

    app.use(methodOverride());

    app.use(cookieSession(sessionConfig));

    app.use(csrf({
        cookie: true
    }));

    app.use(function (req, res, next) {
        res.cookie('token', req.csrfToken(), {
            path: '/'
        });
        next();
    });

    app.use('/', router);

    let controllers = glob.sync(config.root + '/routes/**/*.js');
    controllers.forEach(function(controller){
        module.require(controller).default(router);
    });

    app.use((req, res) => {
        const data = {
            title: 'Error 404'
        };
        const vueOptions = {
            head: {
                title: 'Error 404'
            }
        };
        res.statusCode = 404;
        res.renderVue('error', data, vueOptions);
    });

    app.use(function onError(error, req, res, next) {
        res.statusCode = 500;
        let data = {
            debug: env === 'development',
            errorCode: error.code,
            error: error.stack
        };
        if (res.statusCode) {
            res.renderVue('error', data);
        } else {
            next();
        }
    });

};