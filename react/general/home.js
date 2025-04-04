var React = require('react');
module.exports.IconHome = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: 'M36 255c-5.991 0-11-5.009-11-11V123.485l-5.957 4.964c-4.603 3.836-11.657 3.195-15.493-1.408s-3.194-11.657 1.409-15.493l119.999-100c3.956-3.3 9.865-3.365 13.892-.154l.193.157 96 80 .068.058 23.93 19.942c4.603 3.836 5.245 10.89 1.409 15.493-3.794 4.559-10.897 5.249-15.492 1.407l-5.959-4.966V244c0 5.991-5.009 11-11 11zm128-102c5.991 0 11 5.009 11 11v69h42V105.152l-85-70.833-85 70.833V233h42v-69c0-5.991 5.009-11 11-11z' })
    );
}