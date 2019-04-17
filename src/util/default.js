exports.default = {
    log : log
}

log = function (data) {
    if (window.console && window.console.log) {
        if (typeof data === 'string') {
            window.console.log('parser-log: ' + data);
        } else {
            window.console.log(data);
        }
    }
}
