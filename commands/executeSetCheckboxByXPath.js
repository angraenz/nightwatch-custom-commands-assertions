/**
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .executeSetCheckboxByXPath('xPath', true);
 * };
 * ```
 *
 * @method executeSetCheckboxByXPath
 * @param {string} xPath.
 * @param {boolean} [checked].
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

const xPathPackage = require('../xpath.js');

exports.command = function (xPath, checked = true, callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .execute(xPathPackage.setCheckboxScriptAsString(xPath, !!checked));
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};