/**
 * set http://autonumeric.org/ value
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .setAutoNumericValue(selector, 6.6)
 * };
 * ```
 *
 * @method setPageDown
 * @param {string}  selector.
 * @param {number}     sleep
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
exports.command = function (selector, sleep = 1000, callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .setValue(selector, browser.Keys.PAGEDOWN)
            .pause(sleep)
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};