'use strict';


const SortByDateCreated = 'dateCreated';
const SortByScore = 'score';
const SortByName = 'name';
const SortByVotes = 'numVotes';
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
    // TODO validate parameters
    return {
        // keywords: search+term
        keywords: keywords,
        // keywordExact: 0 or 1   [Perform an exact search for the keywords passed. Default 0]
        keywordExact: exactKeywords ? 1 : 0,
        // hueRange: 12,68   [values must be 0>value<359, and the left value must be less than the right value]
        hueRange: `${hueMin},${hueMax}`,
        // briRange: 2,88   [values must be 0>value<99, and the left value must be less than the right value]
        briRange: `${brightnessMin},${brightnessMax}`,
        // lover: e.g. COLOURlover
        lover: userName,
        // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
        orderCol: sortBy,
        // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
        sortBy: sortOrder,
        // numResults: 20   [Number of results to return, maximum of 100. Default 20]
        numResults: resultsCount,
        // resultOffset: 5   [Result offset, for paging. Default 0]
        resultOffset: resultsOffset,
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
    // TODO validate parameters
    // TODO hex could also be an array
    // TODO pass hex_logic as parameter
    return {
        // lover: COLOURlover
        lover: userName,
        // hueOption: yellow,orange,red  or  green,violet  or  blue [Possible Values can be a combination of: red, orange, yellow, green, aqua, blue, violet, and / or fuchsia]
        hueOption: hues.join(','),
        // hex: 00FF33  or  00FF33,CC00FF,DD0033,003333,0033FF [Possible Values: any valid 6-char hex value or list of up to five (5) hex values, separated by commas]
        hex: hex.substr(1),
        // hex_logic: AND  or  OR. Sets the comparison logic for the hex list. Passing AND will find palettes with all provided hex values, passing OR will find palettes with any of the provided hex values. [Possible Values: AND or OR. Default AND]
        hex_logic: 'AND',
        // keywords: search+term
        keywords: keywords,
        // keywordExact: 0 or 1   [Perform an exact search for the keywords passed. Default 0]
        keywordExact: exactKeywords ? 1 : 0,
        // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
        orderCol: sortBy,
        // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
        sortBy: sortOrder,
        // numResults: 20   [Number of results to return, maximum of 100. Default 20]
        numResults: resultsCount,
        // resultOffset: 5   [Result offset, for paging. Default 0]
        resultOffset: resultsOffset,
        // showPaletteWidths: 0 or 1   [Shows palette's color's widths. Default 0]
        showPaletteWidths: enableColorsWidths ? 1 : 0,
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
    // TODO validate parameters
    // TODO hex could also be an array
    // TODO pass hex_logic as parameter
    return {
        // lover: COLOURlover
        lover: userName,
        // hueOption: yellow,orange,red  or  green,violet  or  blue [Possible Values can be a combination of: red, orange, yellow, green, aqua, blue, violet, and / or fuchsia]
        hueOption: hues.join(','),
        // hex: 00FF33  or  00FF33,CC00FF,DD0033,003333,0033FF [Possible Values: any valid 6-char hex value or list of up to five (5) hex values, separated by commas]
        hex: hex.substr(1),
        // hex_logic: AND  or  OR. Sets the comparison logic for the hex list. Passing AND will find palettes with all provided hex values, passing OR will find palettes with any of the provided hex values. [Possible Values: AND or OR. Default AND]
        hex_logic: 'AND',
        // keywords: search+term
        keywords: keywords,
        // keywordExact: 0 or 1   [Perform an exact search for the keywords passed. Default 0]
        keywordExact: exactKeywords ? 1 : 0,
        // orderCol: X   [Where X can be: dateCreated, score, name, numVotes, or numViews]
        orderCol: sortBy,
        // sortBy: X   [Where X can be: ASC or DESC. Default ASC]
        sortBy: sortOrder,
        // numResults: 20   [Number of results to return, maximum of 100. Default 20]
        numResults: resultsCount,
        // resultOffset: 5   [Result offset, for paging. Default 0]
        resultOffset: resultsOffset,
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
};
