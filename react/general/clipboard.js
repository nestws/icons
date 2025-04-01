var React = require('react');
module.exports.IconClipboard = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M44 263c-5.991 0-11-5.009-11-11V45c0-5.991 5.009-11 11-11h61.465a27 27 0 0 1-.464-5c.017-14.7 12.301-26.983 27-27 14.699.017 26.983 12.3 27 27a27 27 0 0 1-.464 5h61.464c5.991 0 11 5.009 11 11v207c0 5.991-5.009 11-11 11zm11-22h154V56h-32.43c4.386 1.521 7.1 2.69 7.425 2.833 3.607 1.574 6.001 5.232 6 9.167v12.5c0 5.447-4.553 10-10 10h-96c-5.447 0-10-4.553-10-10V68c0-4.048 2.534-7.788 6.294-9.288.345-.137 3.164-1.25 7.663-2.711H54.996zm77-207c2.722-.004 4.996-2.278 5-5-.004-2.722-2.278-4.996-5-5-2.722.004-4.996 2.278-5 5 .003 2.721 2.278 4.997 5 5' })
    );
}