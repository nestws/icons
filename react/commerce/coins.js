var React = require('react');
module.exports.IconCoins = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M6.483 214.518C5.511 212.841 4.999 209 4.999 209s.1-132.468.129-132.682C8.086 34.263 61.635 3 131.999 3c69.66 0 124.672 31.861 127.854 73.209.047.286.145 132.791.145 132.791s-.547 3.97-1.582 5.685C257.249 216.616 228.741 261 131.998 261c-96.868.001-124.39-44.542-125.515-46.482m20.516-9.065c6.245 7.6 33.449 33.547 105 33.547 71.359 0 99.34-25.815 106-33.668V181.81c-2.478 1.641-28.352 29.1-106 29.19s-102.843-27.512-105-28.951zm105-16.453c36.424 0 80.949-6.137 106-35.668V124.29c-21.194 19.3-53.485 33.656-106.235 33.71s-83.681-14.321-104.765-33.494v28.947C51.351 183.079 96.082 189 131.999 189' })
    );
}