'use strict';
var  React = require('react');

module.exports.IconPower = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M39.308 39.369c4.236-4.236 11.32-4.236 15.556 0s4.236 11.32 0 15.556A109.12 109.12 0 0 0 22.99 132c0 59.391 49.558 108.949 108.949 108.949S240.887 191.391 240.887 132a109.13 109.13 0 0 0-31.874-77.075c-4.236-4.236-4.236-11.32 0-15.556 4.237-4.236 11.32-4.236 15.556 0 65.147 65.145 41.093 179.09-42.494 213.657-31.836 13.166-68.438 13.166-100.274 0C-1.784 218.459-25.838 104.514 39.308 39.369m81.633 88.63v-116c0-5.991 5.009-11 11-11s11 5.009 11 11v116c0 5.991-5.009 11-11 11-5.991.001-11-5.007-11.001-10.999z' })
    );
}