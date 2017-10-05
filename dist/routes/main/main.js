'use strict';

module.exports.default = function (router) {
    router.get('/', function (req, res) {
        var data = {
            title: 'Hello World',
            title2: 'blubb'
        };
        var vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };
        res.renderVue('main/main', data, vueOptions);
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9tYWluL21haW4uanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJyb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYXRhIiwidGl0bGUiLCJ0aXRsZTIiLCJ2dWVPcHRpb25zIiwiaGVhZCIsInJlbmRlclZ1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxDQUFlQyxPQUFmLEdBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQ0EsV0FBT0MsR0FBUCxDQUFXLEdBQVgsRUFBZ0IsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDMUIsWUFBTUMsT0FBTztBQUNUQyxtQkFBTyxhQURFO0FBRVRDLG9CQUFRO0FBRkMsU0FBYjtBQUlBLFlBQU1DLGFBQWE7QUFDZkMsa0JBQU07QUFDRkgsdUJBQU87QUFETDtBQURTLFNBQW5CO0FBS0FGLFlBQUlNLFNBQUosQ0FBYyxXQUFkLEVBQTJCTCxJQUEzQixFQUFpQ0csVUFBakM7QUFDSCxLQVhEO0FBWUgsQ0FiRCIsImZpbGUiOiJyb3V0ZXMvbWFpbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IChyb3V0ZXIpID0+IHtcclxuICAgIHJvdXRlci5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcclxuICAgICAgICAgICAgdGl0bGUyOiAnYmx1YmInXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB2dWVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4cHJlc3MtVnVlIE1WQyBTdGFydGVyIEtpdCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzLnJlbmRlclZ1ZSgnbWFpbi9tYWluJywgZGF0YSwgdnVlT3B0aW9ucyk7XHJcbiAgICB9KTtcclxufTsiXX0=
