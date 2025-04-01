'use strict';
var  React = require('react');

module.exports.IconPinterest = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M228 90c0 55.669-30.376 98-76 98-15.318 0-30.055-8.591-35-18 0 0-8.26 32.7-10 39-6.133 22.277-24.6 44.156-26 46-.943 1.242-2.99.559-3-1-.4-2.844-5.428-30.05 0-53 2.723-11.509 19-78 19-78s-5-8.612-5-22c0-21.029 12.838-37 28-37 12.905 0 19 9.387 19 21 0 12.983-8.728 33.03-13 51-3.567 15.059 8.15 27 23 27 26.874 0 45-34.1 45-75 0-31.09-20.905-55-59-55-43.023 0-70 32.144-70 68 0 12.353 3.3 21.263 9 28 2.62 3.1 2.95 4.433 2 8-.7 2.618-2.327 8.5-3 11-.93 3.584-3.743 5.326-7 4-19.814-8.1-29-29.6-29-54C37 57.691 70.6 9 138 9c54.193 0 90 38.918 90 81' })
    );
}