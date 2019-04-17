// all the api calls.
module.export = function () {
    // returns a promise.
    /** @todo - doses callback improves the performance. */
    /** 
     * @reason - when we convert it into ECMA5 code how much code is added for promise.
     */
    function GET (url) {
        /** @todo - copy the ajax get request here @tushar */
    }

    return {
        get: GET
    };
};