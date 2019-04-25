// Taken from https://gist.github.com/umarmw/cb06569dfb50dfab3a5e
exports.command = function(filename, expected, callback) {
    var self = this,
        screenshotPath = 'tests/screenshots/',
        resultPath = screenshotPath + 'results/' + filename;

    self.saveScreenshot(resultPath, function(response) {
        self.assert.compareScreenshot(filename, expected, function(result) {
            if (typeof callback === 'function') {
                callback.call(self, result);
            }
        });
    });

    return this; // allows the command to be chained.
};