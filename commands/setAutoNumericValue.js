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
 * @method setAutoNumericValue
 * @param {string}  selector.
 * @param {number}  number value.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
exports.command = function (selector, number, callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .clearValue(selector)
            .setValue(selector, [browser.Keys.SHIFT, browser.Keys.HOME, number]);
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};