'use strict'
exports.__esModule = true
exports['default'] = function() {
  return typeof document === 'undefined'
    ? null
    : document.head.appendChild(document.createElement('style')).sheet
}
