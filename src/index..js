import logger from './log';

(function () {

    // check for window object.
    if (typeof window === 'undefined' || typeof window.document === 'undefined') {
        logger('cannot use vast parser in this environment - missing window or document object');
        return;
    }

    // this case handles the multiple call for same script.
    if (typeof window.vastParser !== 'undefined') {
        logger('VAST parser already exists.');
        return;
    }

    /** @todo - listing down base argument structure. */
    window.vastParser = function (url) {
        if (typeof url === 'undefined') {
            logger('invalid url - provide a valid url.');
            return;
        }
        /** @todo - not sure how to proceed from here need to discuss thoughts. */
    };

})(window);