'use strict';

function paramObject(object) {
    var str = '';
    for (var key in object) {
        if (str != '') {
            str += '&';
        }
        str += key + '=' + encodeURIComponent(object[key]);
    }
    return '?' + str;
}

module.exports = paramObject;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3BhcmFtVXRpbC5qcyJdLCJuYW1lcyI6WyJwYXJhbU9iamVjdCIsIm9iamVjdCIsInN0ciIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDekIsUUFBSUMsTUFBTSxFQUFWO0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCRixNQUFoQixFQUF3QjtBQUNwQixZQUFJQyxPQUFPLEVBQVgsRUFBZTtBQUNYQSxtQkFBTyxHQUFQO0FBQ0g7QUFDREEsZUFBT0MsTUFBTSxHQUFOLEdBQVlDLG1CQUFtQkgsT0FBT0UsR0FBUCxDQUFuQixDQUFuQjtBQUNIO0FBQ0QsV0FBTyxNQUFNRCxHQUFiO0FBQ0g7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJOLFdBQWpCIiwiZmlsZSI6InV0aWxzL3BhcmFtVXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBhcmFtT2JqZWN0KG9iamVjdCkge1xyXG4gICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xyXG4gICAgICAgIGlmIChzdHIgIT0gJycpIHtcclxuICAgICAgICAgICAgc3RyICs9ICcmJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmplY3Rba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJz8nICsgc3RyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmFtT2JqZWN0OyJdfQ==
