'use strict';


const {
    isValidString,
    isValidInteger,
} = require('./utils');
const {
    SortByDateCreated,
    AscendantSortOrder,
    JsonFormatParam,
    createRequestParameters,
    createColorsRequestParameters,
    createPalettesRequestParameters,
    createPatternsRequestParameters,
    createLoversRequestParameters,
} = require('./parameters');


const apiUrl = `http://www.colourlovers.com/api`;

/*
------------------- Colors -------------------
 */

/**
 * @param hex A 6-char hex value (ex: 6B4106)
 * @returns
 */
function createColorRequest(hex) {
    if (!isValidString(hex) || hex === '')
        throw new Error(`hex parameter is not valid: ${hex}`);

    // remove '#' char
    if (hex.charAt(0) === '#')
        hex = hex.substr(1);

    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/color/${hex}?${parameters}`;
}

function createRandomColorRequest() {
    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/colors/random?${parameters}`;
}

function createColorsRequest(
    keywords = '',
    exactKeywords = false,
    hueMin = 0,
    hueMax = 359,
    brightnessMin = 0,
    brightnessMax = 99,
    userName = '',
    sortBy = SortByDateCreated,
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createColorsRequestParameters(
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
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/colors?${requestParameters}`;
}

function createNewColorsRequest(
    keywords = '',
    exactKeywords = false,
    hueMin = 0,
    hueMax = 359,
    brightnessMin = 0,
    brightnessMax = 99,
    userName = '',
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createColorsRequestParameters(
        keywords,
        exactKeywords,
        hueMin,
        hueMax,
        brightnessMin,
        brightnessMax,
        userName,
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/colors/new?${requestParameters}`;
}

function createTopColorsRequest(
    keywords = '',
    exactKeywords = false,
    hueMin = 0,
    hueMax = 359,
    brightnessMin = 0,
    brightnessMax = 99,
    userName = '',
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createColorsRequestParameters(
        keywords,
        exactKeywords,
        hueMin,
        hueMax,
        brightnessMin,
        brightnessMax,
        userName,
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/colors/top?${requestParameters}`;
}

/*
------------------- Palettes -------------------
 */

function createPaletteRequest(paletteId) {
    // TODO add parameter showPaletteWidths
    if (!isValidInteger(paletteId))
        throw new Error(`paletteId parameter is not valid: ${paletteId}`);

    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/palette/${paletteId}?${parameters}`;
}

function createRandomPaletteRequest() {
    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/palettes/random?${parameters}`;
}

function createPalettesRequest(
    keywords = '',
    exactKeywords = false,
    hues = [],
    hex = '',
    enableColorsWidths = false,
    userName = '',
    sortBy = SortByDateCreated,
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createPalettesRequestParameters(
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
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/palettes?${requestParameters}`;
}

function createNewPalettesRequest(
    keywords = '',
    exactKeywords = false,
    hues = [],
    hex = '',
    enableColorsWidths = false,
    userName = '',
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createPalettesRequestParameters(
        keywords,
        exactKeywords,
        hues,
        hex,
        enableColorsWidths,
        userName,
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/palettes/new?${requestParameters}`;
}

function createTopPalettesRequest(
    keywords = '',
    exactKeywords = false,
    hues = [],
    hex = '',
    enableColorsWidths = false,
    userName = '',
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createPalettesRequestParameters(
        keywords,
        exactKeywords,
        hues,
        hex,
        enableColorsWidths,
        userName,
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/palettes/top?${requestParameters}`;
}

/*
------------------- Patterns -------------------
 */

function createPatternRequest(patternId) {
    if (!isValidInteger(patternId))
        throw new Error(`patternId parameter is not valid: ${patternId}`);

    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/pattern/${patternId}?${parameters}`;
}

function createRandomPatternRequest() {
    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/patterns/random?${parameters}`;
}

function createPatternsRequest(
    keywords = '',
    exactKeywords = false,
    hues = [],
    hex = '',
    userName = '',
    sortBy = SortByDateCreated,
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createPatternsRequestParameters(
        keywords,
        exactKeywords,
        hues,
        hex,
        userName,
        sortBy,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/patterns?${requestParameters}`;
}

function createNewPatternsRequest(
    keywords = '',
    exactKeywords = false,
    hues = [],
    hex = '',
    userName = '',
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createPatternsRequestParameters(
        keywords,
        exactKeywords,
        hues,
        hex,
        userName,
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/patterns/new?${requestParameters}`;
}

function createTopPatternsRequest(
    keywords = '',
    exactKeywords = false,
    hues = [],
    hex = '',
    userName = '',
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createPatternsRequestParameters(
        keywords,
        exactKeywords,
        hues,
        hex,
        userName,
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/patterns/top?${requestParameters}`;
}

/*
------------------- Lovers -------------------
 */

function createLoverRequest(userName) {
    // TODO add comments parameter
    if (!isValidString(userName))
        throw new Error(`userName parameter is not valid: ${userName}`);

    const parameters = createRequestParameters(JsonFormatParam);
    return `${apiUrl}/lover/${userName}?${parameters}`;
}

function createLoversRequest(
    sortBy = SortByDateCreated,
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createLoversRequestParameters(
        sortBy,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/lovers?${requestParameters}`;
}

function createNewLoversRequest(
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createLoversRequestParameters(
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/lovers/new?${requestParameters}`;
}

function createTopLoversRequest(
    sortOrder = AscendantSortOrder,
    resultsCount = 20,
    resultsOffset = 0,
) {
    let parameters = createLoversRequestParameters(
        null,
        sortOrder,
        resultsCount,
        resultsOffset,
    );
    const requestParameters = createRequestParameters(parameters);
    return `${apiUrl}/lovers/top?${requestParameters}`;
}


module.exports = {
    // Colors
    createColorRequest: createColorRequest,
    createRandomColorRequest: createRandomColorRequest,
    createColorsRequest: createColorsRequest,
    createNewColorsRequest: createNewColorsRequest,
    createTopColorsRequest: createTopColorsRequest,
    // Palettes
    createPaletteRequest: createPaletteRequest,
    createRandomPaletteRequest: createRandomPaletteRequest,
    createPalettesRequest: createPalettesRequest,
    createNewPalettesRequest: createNewPalettesRequest,
    createTopPalettesRequest: createTopPalettesRequest,
    // Patterns
    createPatternRequest: createPatternRequest,
    createRandomPatternRequest: createRandomPatternRequest,
    createPatternsRequest: createPatternsRequest,
    createNewPatternsRequest: createNewPatternsRequest,
    createTopPatternsRequest: createTopPatternsRequest,
    // Lovers
    createLoverRequest: createLoverRequest,
    createLoversRequest: createLoversRequest,
    createNewLoversRequest: createNewLoversRequest,
    createTopLoversRequest: createTopLoversRequest,
};
