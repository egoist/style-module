'use strict'
exports.__esModule = true
var browser_1 = require('./browser')
exports['default'] = function() {
  if (typeof document !== 'undefined') return browser_1['default']()
  var rules = {}
  return {
    insertRule: function(rule, position) {
      rules[position] = {
        cssText: rule
      }
    },
    cssRules: rules
  }
}
