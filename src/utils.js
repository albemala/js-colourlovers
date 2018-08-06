'use strict';


const _ = require('lodash');


function isValid(val) {
    return val !== null && val !== undefined;
}

function isValidObject(val) {
    return isValid(val) && _.isPlainObject(val) && !_.isEmpty(val);
}

function isValidArray(val) {
    return _.isArray(val);
}

function isValidInteger(val) {
    return _.isInteger(val);
}

function isValidNumber(val) {
    return _.isNumber(val) && _.isFinite(val);
}

function isValidString(val) {
    return _.isString(val);
}

function isValidDate(val) {
    return _.isDate(val) || !isNaN(Date.parse(val));
}


module.exports = {
    isValid: isValid,
    isValidObject: isValidObject,
    isValidArray: isValidArray,
    isValidInteger: isValidInteger,
    isValidNumber: isValidNumber,
    isValidString: isValidString,
    isValidDate: isValidDate,
};
