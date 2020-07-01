/**
 * Checks if the given element contains the specified text.
 *
 * ```
 *   this.demoTest = function (browser) {
 *     browser.assert.containsAmount('#main', 1234567);
 *   };
 * ```
 *
 * @method containsAmount
 * @param {string|object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {number} number The text to look for.
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

const numberPackage = require('../formatters/number');

exports.assertion = function(definition, number, msg) {
    this.options = {
        elementSelector: true
    };

    /*!
     * Returns the message format which will be used to output the message in the console and also
     *  the arguments which will be used for replace the place holders, used in the order of appearance
     */
    this.formatMessage = function() {
        const message = msg || `Testing if element %s ${this.negate ? 'does not contain text %s' : 'contains text %s'}`;

        return {
            message,
            args: [this.elementSelector, `'${number}'`]
        }
    };

    /*!
     * Returns the expected value of the assertion which is displayed in the case of a failure
     *
     * @return {string}
     */
    this.expected = function() {
        return this.negate ? `does not contain text '${number}'` : `contains text '${number}'`;
    };

    /*!
     * Given the value, the condition used to evaluate if the assertion is passed
     * @param {*} value
     * @return {Boolean}
     */
    this.evaluate = function(value) {
        if (typeof value != 'string') {
            return false;
        }

        const numberString = numberPackage.numberToString(number);
        console.info(`numberToString ${number} => ${numberString}`);

        return value.includes(numberString);
    };

    /*!
     * When defined, this method is called by the assertion runner with the command result, to determine if the
     *  value can be retrieved successfully from the result object
     *
     * @param result
     * @return {boolean|*}
     */
    this.failure = function(result) {
        return result === false || result && result.status === -1;
    };

    /*!
     * Called with the result object of the command to retrieve the value which is to be evaluated
     *
     * @param {Object} result
     * @return {*}
     */
    this.value = function(result) {
        return result.value;
    };

    /*!
     * When defined, this method is called by the assertion runner with the command result to determine the actual
     *  state of the assertion in the event of a failure
     *
     * @param {Boolean} passed
     * @return {string}
     */
    this.actual = function(passed) {
        return passed ? `contains '${number}'` : `does not contain '${number}'`;
    };

    /*!
     * The command which is to be executed by the assertion runner
     * @param {function} callback
     */
    this.command = function(callback) {
        this.api.getText(definition, callback);
    };
};
