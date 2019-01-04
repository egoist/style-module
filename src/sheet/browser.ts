export default () =>
  typeof document === 'undefined'
    ? null
    : document.head.appendChild(document.createElement('style')).sheet
