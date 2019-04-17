/** @discuss - how to keep the base structure of each file. */
exports.default = {
    isNumber : isNumber,
    isObject : isObject
}

// not sure but guessing this is an error/global object.
isNumber = function (n) {
    if (typeof n != 'undefined' && typeof n === 'number' && Number.isFinite(n)) {
        return true;
    }
    return false;
}

// not sure but guessing this is an error/global object.
isObject = function (obj) {
    if (typeof obj !== 'undefined' && obj !== null && _typeof(obj) === 'object') {
        return true;
    }
    return false;
}
