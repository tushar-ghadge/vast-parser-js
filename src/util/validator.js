// list of functions need for validation.
module.exports = function () {

    function isNumber () {
        if (typeof n !== 'undefined' && typeof n === 'number' && Number.isFinite(n)) {
            return true;
          }
          return false;
    }

    function isObject (obj) {
        if (typeof obj !== 'undefined' && obj !== null && typeof obj === 'object') {
            return true;
          }
          return false;
    }

    function hasDomParser () {
        if (typeof window.DOMParser !== 'undefined') {
            return true;
          }
          return false;
    }

    return {
        isNumber: isNumber,
        isObject: isObject,
        hasDomParser: hasDomParser
    };
};