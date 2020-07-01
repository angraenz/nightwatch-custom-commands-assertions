/**
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .executeSetInputValueByXPath('xPath', 50)
 * };
 * ```
 *
 * @method executeSetInputValueByXPath
 * @param {string}  xPath.
 * @param {string}  value.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

const xPathPackage = require('../xpath.js');

exports.command = function (xPath, value, callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .execute(xPathPackage.setInputValueScriptAsString(xPath, value));
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};