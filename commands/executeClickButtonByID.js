/**
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .executeClickButtonByID('id')
 * };
 * ```
 *
 * @method executeClickButtonByID
 * @param {string}  id.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
exports.command = function (id, callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .execute(`document.getElementById("${id}").click();`)
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};