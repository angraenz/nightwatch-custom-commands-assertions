/**
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser
 *      .executeClickButtonByXPath('xPath')
 * };
 * ```
 *
 * @method executeClickButtonByXPath
 * @param {string} xPath.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */

const xPathPackage = require('../xpath.js');

exports.command = function (xPath, callback) {
    const browser = this;

    browser.perform(function () {
        browser
            .execute(xPathPackage.clickButtonScriptAsString(xPath));
    });

    if (typeof callback === 'function') {
        callback.call(this);
    }

    return this;
};