'use strict';

var express = require('express');
var config = require('./config');
var Router = require('./router');
var cluster = require('cluster');
var os = require('os');

var app = express();

Router.init(app, config);

if (cluster.isMaster && config.env !== 'development') {
    var workers = [];

    for (var i = 0; i < os.cpus().length; i++) {
        workers[i] = cluster.fork();
        workers[i].on('exit', function (code, signal) {
            if (signal) {
                console.error('worker was killed by signal: ' + signal);
            } else if (code !== 0) {
                console.error('worker exited with error code: ' + code);
            } else {
                console.error('worker exited');
            }
        });
    }
} else {
    app.listen(config.port, function () {
        console.warn('Worker ' + process.pid + ' running a ' + config.env + ' server listening on port ' + config.port);
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiUm91dGVyIiwiY2x1c3RlciIsIm9zIiwiYXBwIiwiaW5pdCIsImlzTWFzdGVyIiwiZW52Iiwid29ya2VycyIsImkiLCJjcHVzIiwibGVuZ3RoIiwiZm9yayIsIm9uIiwiY29kZSIsInNpZ25hbCIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbiIsInBvcnQiLCJ3YXJuIiwicHJvY2VzcyIsInBpZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQU1FLFNBQVNGLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUksS0FBS0osUUFBUSxJQUFSLENBQVg7O0FBRUEsSUFBSUssTUFBTU4sU0FBVjs7QUFFQUcsT0FBT0ksSUFBUCxDQUFZRCxHQUFaLEVBQWlCSixNQUFqQjs7QUFFQSxJQUFHRSxRQUFRSSxRQUFSLElBQW9CTixPQUFPTyxHQUFQLEtBQWUsYUFBdEMsRUFBb0Q7QUFDaEQsUUFBSUMsVUFBVSxFQUFkOztBQUVBLFNBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUlOLEdBQUdPLElBQUgsR0FBVUMsTUFBN0IsRUFBcUNGLEdBQXJDLEVBQXlDO0FBQ3JDRCxnQkFBUUMsQ0FBUixJQUFhUCxRQUFRVSxJQUFSLEVBQWI7QUFDQUosZ0JBQVFDLENBQVIsRUFBV0ksRUFBWCxDQUFjLE1BQWQsRUFBc0IsVUFBQ0MsSUFBRCxFQUFPQyxNQUFQLEVBQWtCO0FBQ3BDLGdCQUFHQSxNQUFILEVBQVU7QUFDTkMsd0JBQVFDLEtBQVIsbUNBQThDRixNQUE5QztBQUNILGFBRkQsTUFFTSxJQUFHRCxTQUFTLENBQVosRUFBYztBQUNoQkUsd0JBQVFDLEtBQVIscUNBQWdESCxJQUFoRDtBQUNILGFBRkssTUFFRDtBQUNERSx3QkFBUUMsS0FBUixDQUFjLGVBQWQ7QUFDSDtBQUNKLFNBUkQ7QUFTSDtBQUNKLENBZkQsTUFlTztBQUNIYixRQUFJYyxNQUFKLENBQVdsQixPQUFPbUIsSUFBbEIsRUFBd0IsWUFBTTtBQUMxQkgsZ0JBQVFJLElBQVIsYUFBdUJDLFFBQVFDLEdBQS9CLG1CQUFnRHRCLE9BQU9PLEdBQXZELGtDQUF1RlAsT0FBT21CLElBQTlGO0FBQ0gsS0FGRDtBQUdIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcclxuY29uc3QgUm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcclxuY29uc3QgY2x1c3RlciA9IHJlcXVpcmUoJ2NsdXN0ZXInKTtcclxuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xyXG5cclxubGV0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcblJvdXRlci5pbml0KGFwcCwgY29uZmlnKTtcclxuXHJcbmlmKGNsdXN0ZXIuaXNNYXN0ZXIgJiYgY29uZmlnLmVudiAhPT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICBsZXQgd29ya2VycyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3MuY3B1cygpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB3b3JrZXJzW2ldID0gY2x1c3Rlci5mb3JrKCk7XHJcbiAgICAgICAgd29ya2Vyc1tpXS5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcclxuICAgICAgICAgICAgaWYoc2lnbmFsKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHdvcmtlciB3YXMga2lsbGVkIGJ5IHNpZ25hbDogJHtzaWduYWx9YCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvZGUgIT09IDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgd29ya2VyIGV4aXRlZCB3aXRoIGVycm9yIGNvZGU6ICR7Y29kZX1gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd3b3JrZXIgZXhpdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSBlbHNlIHtcclxuICAgIGFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYFdvcmtlciAke3Byb2Nlc3MucGlkfSBydW5uaW5nIGEgJHtjb25maWcuZW52fSBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtjb25maWcucG9ydH1gKTtcclxuICAgIH0pO1xyXG59Il19
