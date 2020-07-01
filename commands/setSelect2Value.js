/**
 * set https://select2.org/ value
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .setSelect2Value(selectorContainer, selectorInput, 'text')
 * };
 * ```
 *
 * @method setSelect2Value
 * @param {string}  selectorContainer
 * @param {string} value
 * @param {number} [sleep] in milliseconds
 * @param {string}  [selectorInput]
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
exports.command = function (selectorContainer, value, sleep = 500, selectorInput = '/html/body/span/span/span[1]/input', callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .click(selectorContainer)
            .setValue(selectorInput, value)
            .pause(sleep)
            .setValue(selectorInput, browser.Keys.ENTER);
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};