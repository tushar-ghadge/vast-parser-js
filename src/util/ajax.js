const validator = require('./validator');
const def = require('./default');

exports.default = {
    get : getCall
}

getCall = function (url, timeout, returnData, withCredentials) {
    return new Promise(function (resolve, reject) {
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.timeout = timeout;
    
            if (withCredentials) {
            xhr.withCredentials = true;
            }
    
            xhr.onloadend = function () {
                if (validator.isNumber(xhr.status) && xhr.status >= 200 && xhr.status < 300) {
                    if (typeof xhr.responseText === 'string' && xhr.responseText !== '') {
                        if (returnData) {
                            resolve(xhr.responseText);
                        } else {
                            resolve();
                        }
                    } else {
                        reject();
                    }
                } else {
                    reject();
                }
            };
    
            xhr.ontimeout = function () {
                def.log('XMLHttpRequest timeout');
                reject();
            };
    
            xhr.send(null);
      } else {
        reject();
      }
    });
}