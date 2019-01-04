(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.styleModule = {}));
}(this, function (exports) { 'use strict';

  var createSheet = (function () {
      return typeof document === 'undefined'
          ? null
          : document.head.appendChild(document.createElement('style')).sheet;
  });

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

  var _id = 0;
  exports.sheet = createSheet();
  function reset() {
      _id = 0;
      exports.sheet = createSheet();
  }
  reset();
  function insert(rule) {
      if (exports.sheet instanceof CSSStyleSheet) {
          exports.sheet.insertRule(rule, exports.sheet.cssRules.length);
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

  exports.css = css;
  exports.styleModule = styleModule;
  exports.reset = reset;
  exports.keyframes = keyframes;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
