export default (function () {
    return typeof document === 'undefined'
        ? null
        : document.head.appendChild(document.createElement('style')).sheet;
});
