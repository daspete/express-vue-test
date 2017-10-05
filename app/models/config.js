const path = require('path');

class Config {
    constructor() {
        this.env = process.env.NODE_ENV || 'development';
        this.root = path.normalize(__dirname + '/..');
        this.rootPath = process.env.ROOT_PATH || '/';
        this.app = {
            name: 'Express-Vue-MVC-Starter'
        };
        this.port = parseInt(process.env.PORT) || 9000;

        //ExpressVue Setup
        //Latest non-production version of vue as of writing this doc, 
        //you can go to https://unpkg.com/vue/ to find the latest version
        //check the vuejs.org docs for more info
        let vueScript = 'https://unpkg.com/vue@2.4.2/dist/vue.js';
    
        if (process.env.NODE_ENV === 'production') {
            //its production so use the minimised production build of vuejs
            vueScript = 'https://unpkg.com/vue';
        }

        this.vueOptions = {
            rootPath: __dirname + '/../routes/',
            viewsPath: __dirname + '/../components/',
            vue: {
                head: {
                    meta: [{
                        script: vueScript
                    }, {
                        style: 'assets/css/style.css'
                    }]
                }
            }
        };

        this.session = {
            secret: 'CHANGE_ME_TOKEN',
            name: 'session',
            keys: [
                'CHANGE_ME',
                'ME_TOO_PLEASE'
            ],
            resave: true,
            saveUninitialized: true,
            cookie: {
                domain: 'localhost',
                secure: false,
                httpOnly: true,
            }
        };


    }
}
module.exports = Config;