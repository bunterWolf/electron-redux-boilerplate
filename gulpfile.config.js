'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './src/';
        this.es2015 = this.source + '/js-dist/';
        this.esNext = this.source + '/js/**/*';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;
