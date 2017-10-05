'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var path = require('path');

var Config = function Config() {
    _classCallCheck(this, Config);

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
    var vueScript = 'https://unpkg.com/vue@2.4.2/dist/vue.js';

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
        keys: ['CHANGE_ME', 'ME_TOO_PLEASE'],
        resave: true,
        saveUninitialized: true,
        cookie: {
            domain: 'localhost',
            secure: false,
            httpOnly: true
        }
    };
};

module.exports = Config;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb25maWcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJDb25maWciLCJlbnYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJyb290Iiwibm9ybWFsaXplIiwiX19kaXJuYW1lIiwicm9vdFBhdGgiLCJST09UX1BBVEgiLCJhcHAiLCJuYW1lIiwicG9ydCIsInBhcnNlSW50IiwiUE9SVCIsInZ1ZVNjcmlwdCIsInZ1ZU9wdGlvbnMiLCJ2aWV3c1BhdGgiLCJ2dWUiLCJoZWFkIiwibWV0YSIsInNjcmlwdCIsInN0eWxlIiwic2Vzc2lvbiIsInNlY3JldCIsImtleXMiLCJyZXNhdmUiLCJzYXZlVW5pbml0aWFsaXplZCIsImNvb2tpZSIsImRvbWFpbiIsInNlY3VyZSIsImh0dHBPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVNQyxNLEdBQ0Ysa0JBQWM7QUFBQTs7QUFDVixTQUFLQyxHQUFMLEdBQVdDLFFBQVFELEdBQVIsQ0FBWUUsUUFBWixJQUF3QixhQUFuQztBQUNBLFNBQUtDLElBQUwsR0FBWU4sS0FBS08sU0FBTCxDQUFlQyxZQUFZLEtBQTNCLENBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTCxRQUFRRCxHQUFSLENBQVlPLFNBQVosSUFBeUIsR0FBekM7QUFDQSxTQUFLQyxHQUFMLEdBQVc7QUFDUEMsY0FBTTtBQURDLEtBQVg7QUFHQSxTQUFLQyxJQUFMLEdBQVlDLFNBQVNWLFFBQVFELEdBQVIsQ0FBWVksSUFBckIsS0FBOEIsSUFBMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJQyxZQUFZLHlDQUFoQjs7QUFFQSxRQUFJWixRQUFRRCxHQUFSLENBQVlFLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkM7QUFDQVcsb0JBQVksdUJBQVo7QUFDSDs7QUFFRCxTQUFLQyxVQUFMLEdBQWtCO0FBQ2RSLGtCQUFVRCxZQUFZLGFBRFI7QUFFZFUsbUJBQVdWLFlBQVksaUJBRlQ7QUFHZFcsYUFBSztBQUNEQyxrQkFBTTtBQUNGQyxzQkFBTSxDQUFDO0FBQ0hDLDRCQUFRTjtBQURMLGlCQUFELEVBRUg7QUFDQ08sMkJBQU87QUFEUixpQkFGRztBQURKO0FBREw7QUFIUyxLQUFsQjs7QUFjQSxTQUFLQyxPQUFMLEdBQWU7QUFDWEMsZ0JBQVEsaUJBREc7QUFFWGIsY0FBTSxTQUZLO0FBR1hjLGNBQU0sQ0FDRixXQURFLEVBRUYsZUFGRSxDQUhLO0FBT1hDLGdCQUFRLElBUEc7QUFRWEMsMkJBQW1CLElBUlI7QUFTWEMsZ0JBQVE7QUFDSkMsb0JBQVEsV0FESjtBQUVKQyxvQkFBUSxLQUZKO0FBR0pDLHNCQUFVO0FBSE47QUFURyxLQUFmO0FBaUJILEM7O0FBRUxDLE9BQU9DLE9BQVAsR0FBaUJoQyxNQUFqQiIsImZpbGUiOiJtb2RlbHMvY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuXHJcbmNsYXNzIENvbmZpZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcGF0aC5ub3JtYWxpemUoX19kaXJuYW1lICsgJy8uLicpO1xyXG4gICAgICAgIHRoaXMucm9vdFBhdGggPSBwcm9jZXNzLmVudi5ST09UX1BBVEggfHwgJy8nO1xyXG4gICAgICAgIHRoaXMuYXBwID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnRXhwcmVzcy1WdWUtTVZDLVN0YXJ0ZXInXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvcnQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUKSB8fCA5MDAwO1xyXG5cclxuICAgICAgICAvL0V4cHJlc3NWdWUgU2V0dXBcclxuICAgICAgICAvL0xhdGVzdCBub24tcHJvZHVjdGlvbiB2ZXJzaW9uIG9mIHZ1ZSBhcyBvZiB3cml0aW5nIHRoaXMgZG9jLCBcclxuICAgICAgICAvL3lvdSBjYW4gZ28gdG8gaHR0cHM6Ly91bnBrZy5jb20vdnVlLyB0byBmaW5kIHRoZSBsYXRlc3QgdmVyc2lvblxyXG4gICAgICAgIC8vY2hlY2sgdGhlIHZ1ZWpzLm9yZyBkb2NzIGZvciBtb3JlIGluZm9cclxuICAgICAgICBsZXQgdnVlU2NyaXB0ID0gJ2h0dHBzOi8vdW5wa2cuY29tL3Z1ZUAyLjQuMi9kaXN0L3Z1ZS5qcyc7XHJcbiAgICBcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAvL2l0cyBwcm9kdWN0aW9uIHNvIHVzZSB0aGUgbWluaW1pc2VkIHByb2R1Y3Rpb24gYnVpbGQgb2YgdnVlanNcclxuICAgICAgICAgICAgdnVlU2NyaXB0ID0gJ2h0dHBzOi8vdW5wa2cuY29tL3Z1ZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZ1ZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHJvb3RQYXRoOiBfX2Rpcm5hbWUgKyAnLy4uL3JvdXRlcy8nLFxyXG4gICAgICAgICAgICB2aWV3c1BhdGg6IF9fZGlybmFtZSArICcvLi4vY29tcG9uZW50cy8nLFxyXG4gICAgICAgICAgICB2dWU6IHtcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQ6IHZ1ZVNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdhc3NldHMvY3NzL3N0eWxlLmNzcydcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uID0ge1xyXG4gICAgICAgICAgICBzZWNyZXQ6ICdDSEFOR0VfTUVfVE9LRU4nLFxyXG4gICAgICAgICAgICBuYW1lOiAnc2Vzc2lvbicsXHJcbiAgICAgICAgICAgIGtleXM6IFtcclxuICAgICAgICAgICAgICAgICdDSEFOR0VfTUUnLFxyXG4gICAgICAgICAgICAgICAgJ01FX1RPT19QTEVBU0UnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHJlc2F2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNvb2tpZToge1xyXG4gICAgICAgICAgICAgICAgZG9tYWluOiAnbG9jYWxob3N0JyxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZzsiXX0=
