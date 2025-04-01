'use strict';
var  React = require('react');

module.exports.IconRedo = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M226.071 224.566c4.237-4.237 4.237-11.32 0-15.557-4.192-4.192-11.325-4.233-15.557 0a109.12 109.12 0 0 1-77.075 31.875c-59.391 0-108.95-49.559-108.95-108.95 0-56.959 45.655-105.364 102.456-108.757a109.16 109.16 0 0 1 73.853 23.053h-14.653c-5.992 0-11 5.009-11 11s5.008 11 11 11h42c5.991 0 11-5.009 11-11v-42c0-5.991-5.009-11-11-11-5.992 0-11 5.009-11 11v15.929C165.731-11.61 89.007-8.895 40.809 39.305c-51.078 51.076-51.078 134.186 0 185.261 50.335 50.934 133.323 51.934 185.262 0' })
    );
}