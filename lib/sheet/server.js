import createSheet from './browser';
export default (function () {
    if (typeof document !== 'undefined')
        return createSheet();
    var rules = {};
    return {
        insertRule: function (rule, position) {
            rules[position] = {
                cssText: rule
            };
        },
        cssRules: rules
    };
});
