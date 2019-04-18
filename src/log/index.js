// logger will work only when we have debugger flag.
const isDebug = new URLSearchParams('vast_debug');
/** @description - console log string/object passed to this logger. */
module.export = function(data) {
    if (typeof window.console === 'object' && typeof window.console.log) {
        if (typeof data === 'string') {
            window.console.log('vast-parser: ' + data);
        } else if (typeof data === 'object') {
            /** @todo - there is an circular json error. */
            window.console.log('vast-parser: ' + JSON.parse(data));
        }
    }
};

