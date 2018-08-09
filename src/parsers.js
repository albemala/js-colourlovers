'use strict';


const {
    Color,
    Palette,
    Pattern,
    Lover,
    ColorsStats,
    PalettesStats,
    PatternsStats,
    LoversStats,
} = require('./objects');
const {
    isValidObject,
    isValidInteger,
    isValidNumber,
    isValidString,
    isValidDate,
    isValidArray,
} = require('./utils');


function parseDate(date) {
    if (!isValidString(date)) return undefined;

    let dateCreated = date.split(' ');
    dateCreated = `${dateCreated[0]}T${dateCreated[1]}Z`;
    if (!isValidDate(dateCreated)) return undefined;

    return new Date(dateCreated);
}

function parseColor(json) {

    const color = new Color();

    if (isValidInteger(json.id)) color.id = json.id;

    if (isValidString(json.title)) color.title = json.title;

    if (isValidString(json.userName)) color.userName = json.userName;

    if (isValidInteger(json.numViews)) color.viewsCount = json.numViews;
    if (isValidInteger(json.numVotes)) color.votesCount = json.numVotes;
    if (isValidInteger(json.numComments)) color.commentsCount = json.numComments;
    if (isValidNumber(json.numHearts)) color.hearths = json.numHearts;
    if (isValidInteger(json.rank)) color.rank = json.rank;

    color.dateCreated = parseDate(json.dateCreated);

    if (isValidString(json.hex)) color.hex = json.hex;
    if (isValidObject(json.rgb)) color.rgb = json.rgb;
    if (isValidObject(json.hsv)) color.hsv = json.hsv;

    if (isValidString(json.description)) color.description = json.description;

    if (isValidString(json.url)) color.url = json.url;
    if (isValidString(json.imageUrl)) color.imageUrl = json.imageUrl;
    if (isValidString(json.badgeUrl)) color.badgeUrl = json.badgeUrl;
    if (isValidString(json.apiUrl)) color.apiUrl = json.apiUrl;

    return color;
}

function parsePalette(json) {

    const palette = new Palette();

    if (isValidInteger(json.id)) palette.id = json.id;

    if (isValidString(json.title)) palette.title = json.title;

    if (isValidString(json.userName)) palette.userName = json.userName;

    if (isValidInteger(json.numViews)) palette.viewsCount = json.numViews;
    if (isValidInteger(json.numVotes)) palette.votesCount = json.numVotes;
    if (isValidInteger(json.numComments)) palette.commentsCount = json.numComments;
    if (isValidNumber(json.numHearts)) palette.hearths = json.numHearts;
    if (isValidInteger(json.rank)) palette.rank = json.rank;

    palette.dateCreated = parseDate(json.dateCreated);

    if (isValidArray(json.colors)) palette.colors = json.colors;
    if (isValidArray(json.colorWidths)) palette.colorsWidths = json.colorWidths;

    if (isValidString(json.description)) palette.description = json.description;

    if (isValidString(json.url)) palette.url = json.url;
    if (isValidString(json.imageUrl)) palette.imageUrl = json.imageUrl;
    if (isValidString(json.badgeUrl)) palette.badgeUrl = json.badgeUrl;
    if (isValidString(json.apiUrl)) palette.apiUrl = json.apiUrl;

    return palette;
}

function parsePattern(json) {

    const pattern = new Pattern();

    if (isValidInteger(json.id)) pattern.id = json.id;

    if (isValidString(json.title)) pattern.title = json.title;

    if (isValidString(json.userName)) pattern.userName = json.userName;

    if (isValidInteger(json.numViews)) pattern.viewsCount = json.numViews;
    if (isValidInteger(json.numVotes)) pattern.votesCount = json.numVotes;
    if (isValidInteger(json.numComments)) pattern.commentsCount = json.numComments;
    if (isValidNumber(json.numHearts)) pattern.hearths = json.numHearts;
    if (isValidInteger(json.rank)) pattern.rank = json.rank;

    pattern.dateCreated = parseDate(json.dateCreated);

    if (isValidArray(json.colors)) pattern.colors = json.colors;

    if (isValidString(json.description)) pattern.description = json.description;

    if (isValidString(json.url)) pattern.url = json.url;
    if (isValidString(json.imageUrl)) pattern.imageUrl = json.imageUrl;
    if (isValidString(json.badgeUrl)) pattern.badgeUrl = json.badgeUrl;
    if (isValidString(json.apiUrl)) pattern.apiUrl = json.apiUrl;

    return pattern;
}

function parseLover(json) {

    const lover = new Lover();

    if (isValidString(json.userName)) lover.userName = json.userName;

    lover.dateRegistered = parseDate(json.dateRegistered);
    lover.dateLastActive = parseDate(json.dateLastActive);

    if (isValidInteger(json.rating)) lover.rating = json.rating;

    if (isValidString(json.location)) lover.location = json.location;

    if (isValidInteger(json.numColors)) lover.colorsCount = json.numColors;
    if (isValidInteger(json.numPalettes)) lover.palettesCount = json.numPalettes;
    if (isValidInteger(json.numPatterns)) lover.patternsCount = json.numPatterns;

    if (isValidInteger(json.numLovers)) lover.loversCount = json.numLovers;

    if (isValidInteger(json.numCommentsMade)) lover.commentsCount = json.numCommentsMade;
    if (isValidInteger(json.numCommentsOnProfile)) lover.commentsOnProfileCount = json.numCommentsOnProfile;

    if (isValidArray(json.comments)) lover.comments = json.comments;

    if (isValidString(json.url)) lover.url = json.url;
    if (isValidString(json.apiUrl)) lover.apiUrl = json.apiUrl;

    return lover;
}

function parseColorsStats(json) {
    const stats = new ColorsStats();
    if (isValidInteger(json.total)) stats.total = json.total;
    return stats;
}

function parsePalettesStats(json) {
    const stats = new PalettesStats();
    if (isValidInteger(json.total)) stats.total = json.total;
    return stats;
}

function parsePatternsStats(json) {
    const stats = new PatternsStats();
    if (isValidInteger(json.total)) stats.total = json.total;
    return stats;
}

function parseLoversStats(json) {
    const stats = new LoversStats();
    if (isValidInteger(json.total)) stats.total = json.total;
    return stats;
}


function getColor(json) {

    if (isValidArray(json) && json.length === 1) {
        const firstResult = json[0];
        return parseColor(firstResult);
    }
    if (isValidObject(json)) {
        return parseColor(json);
    }

    throw new Error(`json is not valid or malformed: ${json}`);
}

function getColors(json) {
    if (!isValidArray(json))
        throw new Error(`json is not valid or malformed: ${json}`);

    return json.map(color => getColor(color));
}

function getPalette(json) {

    if (isValidArray(json) && json.length === 1) {
        const firstResult = json[0];
        return parsePalette(firstResult);
    }
    if (isValidObject(json)) {
        return parsePalette(json);
    }

    throw new Error(`json is not valid or malformed: ${json}`);
}

function getPalettes(json) {
    if (!isValidArray(json))
        throw new Error(`json is not valid or malformed: ${json}`);

    return json.map(palette => getPalette(palette));
}

function getPattern(json) {

    if (isValidArray(json) && json.length === 1) {
        const firstResult = json[0];
        return parsePattern(firstResult);
    }
    if (isValidObject(json)) {
        return parsePattern(json);
    }

    throw new Error(`json is not valid or malformed: ${json}`);
}

function getPatterns(json) {
    if (!isValidArray(json))
        throw new Error(`json is not valid or malformed: ${json}`);

    return json.map(pattern => getPattern(pattern));
}

function getLover(json) {

    if (isValidArray(json) && json.length === 1) {
        const firstResult = json[0];
        return parseLover(firstResult);
    }
    if (isValidObject(json)) {
        return parseLover(json);
    }

    throw new Error(`json is not valid or malformed: ${json}`);
}

function getLovers(json) {
    if (!isValidArray(json))
        throw new Error(`json is not valid or malformed: ${json}`);

    return json.map(lover => getLover(lover));
}

function getColorsStats(json) {
    if (!isValidObject(json))
        throw new Error(`json is not valid or malformed: ${json}`);
    return parseColorsStats(json);
}

function getPalettesStats(json) {
    if (!isValidObject(json))
        throw new Error(`json is not valid or malformed: ${json}`);
    return parsePalettesStats(json);
}

function getPatternsStats(json) {
    if (!isValidObject(json))
        throw new Error(`json is not valid or malformed: ${json}`);
    return parsePatternsStats(json);
}

function getLoversStats(json) {
    if (!isValidObject(json))
        throw new Error(`json is not valid or malformed: ${json}`);
    return parseLoversStats(json);
}

module.exports = {
    getColor: getColor,
    getColors: getColors,
    getPalette: getPalette,
    getPalettes: getPalettes,
    getPattern: getPattern,
    getPatterns: getPatterns,
    getLover: getLover,
    getLovers: getLovers,
    getColorsStats: getColorsStats,
    getPalettesStats: getPalettesStats,
    getPatternsStats: getPatternsStats,
    getLoversStats: getLoversStats,
};
