exports.default = {
    isNumber : isNumber,
    isObject : isObject
}

isNumber = function (n) {
    if (typeof n != 'undefined' && typeof n === 'number' && Number.isFinite(n)) {
        return true;
    }
    return false;
}

isObject = function (obj) {
    if (typeof obj !== 'undefined' && obj !== null && _typeof(obj) === 'object') {
        return true;
    }
    return false;
}
