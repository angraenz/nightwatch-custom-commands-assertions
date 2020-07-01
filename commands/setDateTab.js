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
 * @method setDateTab
 * @param {string}  selector.
 * @param {number}  number value.
 * @param {number}  sleep
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
exports.command = function (selector, number, callback, sleep = 500) {
    const browser = this;

    browser.perform(function () {
        browser
            .clearValue(selector)
            .pause(sleep)
            .setValue(selector, number)
            .setValue(selector, browser.Keys.TAB)
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};