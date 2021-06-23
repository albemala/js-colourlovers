'use strict';


const {
    isValidObject,
    isValidArray,
    isValidBoolean,
    isValidInteger,
    isValidNumber,
    isValidString,
    isValidDate,
} = require('./utils');


const SortByDateCreated = 'dateCreated';
const SortByScore = 'score';
const SortByName = 'name';
const SortByVotes = 'numVotes'; // loves
const SortByViews = 'numViews';

const AscendantSortOrder = 'ASC';
const DescendantSortOrder = 'DESC';

const RedHue = 'red';
const OrangeHue = 'orange';
const YellowHue = 'yellow';
const GreenHue = 'green';
const AquaHue = 'aqua';
const BlueHue = 'blue';
const VioletHue = 'violet';
const FuchsiaHue = 'fuchsia';

const JsonFormatParam = {
    format: 'json',
};


function createRequestParameters(parameters) {
    return Object.keys(parameters)
        .filter(key => parameters[key] !== null || parameters[key] !== undefined)
        .map(key => `${key}=${parameters[key]}`)
        .join('&');
}

function createColorsRequestParameters(
    keywords,
    exactKeywords,
    hueMin,
    hueMax,
    brightnessMin,
    brightnessMax,
    userName,
    sortBy,
    sortOrder,
    resultsCount,
    resultsOffset,
) {
    let parameters = {};

    // keywords: search+term
    if (isValidString(keywords)) parameters.keywords = keywords;

    // keywordExact: 0 or 1   [Perform an exact search for the keywords passed. Default 0]
    if (isValidBoolean(exactKeywords)) parameters.keywordExact = exactKeywords ? 1 : 0;

    // hueRange: 12,68   [values must be 0>value<359, and the left value must be less than the right value]
    if (isValidInteger(hueMin)
        && isValidInteger(hueMax)
        && hueMin >= 0 && hueMin <= 359
        && hueMax >= 0 && hueMax <= 359
        && hueMin < hueMax)
        parameters.hueRange = `${hueMin},${hueMax}`;

    // briRange: 2,88   [values must be 0>value<99, and the left value must be less than the right value]
    if (isValidInteger(brightnessMin)
        && isValidInteger(brightnessMax)
        && brightnessMin >= 0 && brightnessMin <= 99
        && brightnessMax >= 0 && brightnessMax <= 99
        && brightnessMin < brightnessMax)
        parameters.briRange = `${brightnessMin},${brightnessMax}`;

    // lover: e.g. COLOURlover
    if (isValidString(userName)) parameters.lover = userName;

    // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
    if (isValidString(sortBy)) parameters.orderCol = sortBy;

    // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
    if (isValidString(sortOrder)) parameters.sortBy = sortOrder;

    // numResults: 20   [Number of results to return, maximum of 100. Default 20]
    if (isValidInteger(resultsCount)) parameters.numResults = resultsCount;

    // resultOffset: 5   [Result offset, for paging. Default 0]
    if (isValidInteger(resultsOffset)) parameters.resultOffset = resultsOffset;

    return {
        ...parameters,
        ...JsonFormatParam,
    };
}

function createPalettesRequestParameters(
    keywords,
    exactKeywords,
    hues,
    hex,
    enableColorsWidths,
    userName,
    sortBy,
    sortOrder,
    resultsCount,
    resultsOffset,
) {
    // TODO hex could also be an array
    // TODO pass hex_logic as parameter

    let parameters = {};

    // keywords: search+term
    if (isValidString(keywords)) parameters.keywords = keywords;

    // keywordExact: 0 or 1   [Perform an exact search for the keywords passed. Default 0]
    if (isValidBoolean(exactKeywords)) parameters.keywordExact = exactKeywords ? 1 : 0;

    // hueOption: yellow,orange,red  or  green,violet  or  blue [Possible Values can be a combination of: red, orange, yellow, green, aqua, blue, violet, and / or fuchsia]
    if (isValidArray(hues)) parameters.hueOption = hues.join(',');

    // hex: 00FF33  or  00FF33,CC00FF,DD0033,003333,0033FF [Possible Values: any valid 6-char hex value or list of up to five (5) hex values, separated by commas]
    // remove '#' char
    if (hex.charAt(0) === '#')
        hex = hex.substr(1);
    if (isValidString(hex)) parameters.hex = hex;

    // hex_logic: AND  or  OR. Sets the comparison logic for the hex list. Passing AND will find palettes with all provided hex values, passing OR will find palettes with any of the provided hex values. [Possible Values: AND or OR. Default AND]
    parameters.hex_logic = 'AND';

    // showPaletteWidths: 0 or 1   [Shows palette's color's widths. Default 0]
    if (isValidBoolean(enableColorsWidths)) parameters.showPaletteWidths = enableColorsWidths ? 1 : 0;

    // lover: e.g. COLOURlover
    if (isValidString(userName)) parameters.lover = userName;

    // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
    if (isValidString(sortBy)) parameters.orderCol = sortBy;

    // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
    if (isValidString(sortOrder)) parameters.sortBy = sortOrder;

    // numResults: 20   [Number of results to return, maximum of 100. Default 20]
    if (isValidInteger(resultsCount)) parameters.numResults = resultsCount;

    // resultOffset: 5   [Result offset, for paging. Default 0]
    if (isValidInteger(resultsOffset)) parameters.resultOffset = resultsOffset;

    return {
        ...parameters,
        ...JsonFormatParam,
    };
}

function createPatternsRequestParameters(
    keywords,
    exactKeywords,
    hues,
    hex,
    userName,
    sortBy,
    sortOrder,
    resultsCount,
    resultsOffset,
) {
    // TODO hex could also be an array
    // TODO pass hex_logic as parameter

    let parameters = {};

    // keywords: search+term
    if (isValidString(keywords)) parameters.keywords = keywords;

    // keywordExact: 0 or 1   [Perform an exact search for the keywords passed. Default 0]
    if (isValidBoolean(exactKeywords)) parameters.keywordExact = exactKeywords ? 1 : 0;

    // hueOption: yellow,orange,red  or  green,violet  or  blue [Possible Values can be a combination of: red, orange, yellow, green, aqua, blue, violet, and / or fuchsia]
    if (isValidArray(hues)) parameters.hueOption = hues.join(',');

    // hex: 00FF33  or  00FF33,CC00FF,DD0033,003333,0033FF [Possible Values: any valid 6-char hex value or list of up to five (5) hex values, separated by commas]
    // remove '#' char
    if (hex.charAt(0) === '#')
        hex = hex.substr(1);
    if (isValidString(hex)) parameters.hex = hex;

    // hex_logic: AND  or  OR. Sets the comparison logic for the hex list. Passing AND will find palettes with all provided hex values, passing OR will find palettes with any of the provided hex values. [Possible Values: AND or OR. Default AND]
    parameters.hex_logic = 'AND';

    // lover: e.g. COLOURlover
    if (isValidString(userName)) parameters.lover = userName;

    // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
    if (isValidString(sortBy)) parameters.orderCol = sortBy;

    // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
    if (isValidString(sortOrder)) parameters.sortBy = sortOrder;

    // numResults: 20   [Number of results to return, maximum of 100. Default 20]
    if (isValidInteger(resultsCount)) parameters.numResults = resultsCount;

    // resultOffset: 5   [Result offset, for paging. Default 0]
    if (isValidInteger(resultsOffset)) parameters.resultOffset = resultsOffset;

    return {
        ...parameters,
        ...JsonFormatParam,
    };
}

function createLoversRequestParameters(
    sortBy,
    sortOrder,
    resultsCount,
    resultsOffset,
) {
    let parameters = {};

    // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
    if (isValidString(sortBy)) parameters.orderCol = sortBy;

    // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
    if (isValidString(sortOrder)) parameters.sortBy = sortOrder;

    // numResults: 20   [Number of results to return, maximum of 100. Default 20]
    if (isValidInteger(resultsCount)) parameters.numResults = resultsCount;

    // resultOffset: 5   [Result offset, for paging. Default 0]
    if (isValidInteger(resultsOffset)) parameters.resultOffset = resultsOffset;

    return {
        ...parameters,
        ...JsonFormatParam,
    };
}


module.exports = {
    // SortBy
    SortByDateCreated: SortByDateCreated,
    SortByScore: SortByScore,
    SortByName: SortByName,
    SortByVotes: SortByVotes,
    SortByViews: SortByViews,
    // SortOrder
    AscendantSortOrder: AscendantSortOrder,
    DescendantSortOrder: DescendantSortOrder,
    // Hues
    RedHue: RedHue,
    OrangeHue: OrangeHue,
    YellowHue: YellowHue,
    GreenHue: GreenHue,
    AquaHue: AquaHue,
    BlueHue: BlueHue,
    VioletHue: VioletHue,
    FuchsiaHue: FuchsiaHue,
    // Parameters
    JsonFormatParam: JsonFormatParam,
    // functions
    createRequestParameters: createRequestParameters,
    createColorsRequestParameters: createColorsRequestParameters,
    createPalettesRequestParameters: createPalettesRequestParameters,
    createPatternsRequestParameters: createPatternsRequestParameters,
    createLoversRequestParameters: createLoversRequestParameters,
};
