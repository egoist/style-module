import createSheet from './sheet/server';
import { parse, wrap } from './parse';
var _id = 0;
var sheet = createSheet();
function reset() {
    _id = 0;
    sheet = createSheet();
}
reset();
function insert(rule) {
    if (sheet instanceof CSSStyleSheet) {
        sheet.insertRule(rule, sheet.cssRules.length);
    }
}
function css(obj) {
    var id = "sm_" + _id++;
    var rules = parse(obj, "." + id);
    for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
        var rule = rules_1[_i];
        insert(rule);
    }
    if (obj.composes) {
        return obj.composes + " " + id;
    }
    return id;
}
function styleModule(obj) {
    var decl = typeof obj === 'function' ? obj() : obj;
    return Object.keys(decl).reduce(function (res, className) {
        res[className] = css(decl[className]);
        return res;
    }, {});
}
function keyframes(obj) {
    var id = "sm_" + _id++;
    insert(wrap(parse(obj, id, true).join(''), '@keyframes ' + id));
    return id;
}
export { css, styleModule, sheet, reset, keyframes };
