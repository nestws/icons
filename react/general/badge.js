var React = require('react');
module.exports.IconBadge = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M132 263c-17.441-.092-34.25-8.329-45.01-22.057-17.491 1.68-35.305-4.791-47.772-17.165-12.366-12.138-18.756-29.568-17.165-46.822C8.727 165.997.884 149.253.997 132 .91 114.479 8.72 97.451 22.057 86.087 20.454 68.819 26.843 51.37 39.22 39.222 51.695 26.84 69.536 20.361 87.04 22.063 97.999 8.733 114.746.888 132.002 1.001c17.255-.113 34.002 7.732 44.961 21.062 17.506-1.699 35.343 4.775 47.822 17.159 12.376 12.148 18.766 29.597 17.161 46.865 13.336 11.364 21.147 28.392 21.061 45.913.113 17.253-7.73 33.997-21.056 44.956 1.589 17.256-4.803 34.688-17.172 46.825-12.465 12.37-30.284 18.85-47.774 17.164C166.247 254.671 149.439 262.907 132 263m-30.655-39.8c6.917 11.146 18.376 17.8 30.654 17.8s23.737-6.654 30.654-17.8c2.461-3.966 7.31-5.974 11.854-4.91 12.338 2.866 25.74-1.172 34.714-10.068 9.113-9.113 12.877-21.717 10.068-33.714-1.064-4.544.944-9.393 4.91-11.854 10.525-6.469 17.01-18.302 16.8-30.654 0-13.094-6.437-25.222-16.8-31.654-3.966-2.461-5.974-7.31-4.91-11.854 2.809-12-.955-24.6-10.068-33.714-8.974-8.896-22.376-12.934-34.714-10.068-4.544 1.064-9.393-.944-11.854-4.91-6.469-10.525-18.302-17.01-30.654-16.8-12.352-.21-24.185 6.275-30.654 16.8-2.461 3.966-7.31 5.974-11.854 4.91-12.338-2.866-25.74 1.174-34.712 10.071-9.113 9.113-12.877 21.716-10.068 33.714 1.064 4.544-.945 9.393-4.91 11.854-10.363 6.431-16.8 18.56-16.8 31.654-.21 12.352 6.275 24.185 16.8 30.654 3.965 2.461 5.974 7.31 4.91 11.854-2.81 12 .955 24.6 10.068 33.714 8.974 8.897 22.376 12.934 34.714 10.068 4.544-1.072 9.398.953 11.852 4.907' })
    );
}