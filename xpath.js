const getXPathElementScriptAsString = (xPath) => {
    return `document.evaluate('${xPath}', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue`;
};

const clickButtonScriptAsString = (xPath) => {
    return `${getXPathElementScriptAsString(xPath)}.click();`;
};

const doubleClickButtonScriptAsString = (xPath) => {
    return `var doubleClickEvent = document.createEvent('MouseEvents');
            doubleClickEvent.initEvent('dblclick', true, true);
            ${getXPathElementScriptAsString(xPath)}.dispatchEvent(doubleClickEvent);`
};

const setInputValueScriptAsString = (xPath, value) => {
    return `${getXPathElementScriptAsString(xPath)}.value = '${value}';`;
};

const setCheckboxScriptAsString = (xPath, value) => {
    return `${getXPathElementScriptAsString(xPath)}.checked = ${!!value};`;
};


module.exports = {
    clickButtonScriptAsString,
    doubleClickButtonScriptAsString,
    setInputValueScriptAsString,
    setCheckboxScriptAsString,
};
