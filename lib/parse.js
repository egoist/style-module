function kebabcase(str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}
function wrap(stringToWrap, wrapper) {
    return wrapper + '{' + stringToWrap + '}';
}
function parse(obj, className, isInsideObj) {
    if (isInsideObj === void 0) { isInsideObj = false; }
    var rules = [''];
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var prop = _a[_i];
        var value = obj[prop];
        if (prop === 'composes') {
            continue;
        }
        prop = kebabcase(prop);
        if (typeof value === 'object') {
            if (/^(:|>|\.|\*)/.test(prop)) {
                prop = className + prop;
            }
            // replace & in "&:hover", "p>&"
            prop = prop.replace(/&/g, className);
            var res = parse(value, className, !/^@/.test(prop));
            rules.push(wrap(res.join(''), prop));
        }
        else {
            rules[0] += prop + ":" + value + ";";
        }
    }
    if (!isInsideObj) {
        rules[0] = wrap(rules[0], className);
    }
    return rules;
}
export { parse, wrap };
