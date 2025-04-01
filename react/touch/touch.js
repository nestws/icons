'use strict';
var  React = require('react');

module.exports.IconTouch = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M69.794 209.363c-3.241-12.067-6.914-25.745-27.821-47.184-13.497-13.78-3.234-42.125 16.729-41.876 7.905 0 16.2 3.9 24.145 11.042V56.501c-.16-14.77 12.23-27.16 27-27 14.769-.16 27.16 12.23 27 27v46.318c9.237-1.479 18.933 2.298 25.122 9.222 10.601-3.804 22.854-.298 29.906 8.473 17.008-4.48 35.972 7.446 35.972 25.986v57c0 27.678-20.428 60-78 60-39.375 0-69.77-15.866-80.053-54.137m-11.458-61.916c24.511 30.053 28.187 43.109 31.7 56.2 7.206 26.853 30.587 38.844 59.807 38.844 35.065 0 56-15.206 56-39v-57c0-5.491-6.932-7.991-10.034-3.627-2.653 3.732-7.488 5.45-11.9 4.228-4.412-1.221-7.676-5.181-8.032-9.746-.243-4.773-6.54-6.543-9.068-2.48-2.653 3.731-7.488 5.449-11.9 4.227s-7.676-5.181-8.032-9.746c-.877-5.847-8.825-6.124-10.724-1.018-1.833 4.928-7.084 7.922-12.258 6.99s-9.051-5.568-9.051-10.826v-68c.095-2.757-2.243-5.095-5-5-2.76-.095-5.095 2.24-5 5v108c0 5.004-3.516 9.488-8.375 10.682-4.86 1.194-10.052-1.15-12.371-5.584-11.653-22.281-22.514-27.3-25.4-27.3-2.198 0-2.096 3.709-.362 5.156M54.491 53.19c0-27.768 25.712-52.159 55.023-52.2 28.162.218 55.053 22.947 55.053 52.092 0 5.992-5.009 11-11 11s-11-5.008-11-11c0-17.12-16.917-29.81-33.023-30.09-17.3.022-33.053 14.417-33.053 30.2 0 5.992-5.009 11-11 11-5.99.002-11-5.003-11.003-10.993z' })
    );
}