var React = require('react');
module.exports.IconLab = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M53.001 262.999c-16.144 0-35-9.166-35-35 0-20.517 46.627-111.426 63-142.707V23c-6.336 0-12-4.24-12-11 0-5.991 5.009-11 11-11h104c5.991 0 11 5.009 11 11 0 6.76-5.664 11-12 11v62.254c16.646 31.312 64 122.2 64 142.746 0 25.834-18.854 35-35 35zm110.344-105.491c10.91-4.631 19.609-9.262 26.6-10.705a2186 2186 0 0 0-27.651-53.626 11 11 0 0 1-1.3-5.177V23h-58v65c0 1.782-.433 3.537-1.261 5.114-11.67 22.229-23.525 45.784-33.684 66.958 43.167 15.851 73.601 6.643 95.295-2.564z' })
    );
}