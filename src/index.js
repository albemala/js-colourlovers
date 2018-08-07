'use strict';


const {
    SortByDateCreated,
    SortByScore,
    SortByName,
    SortByVotes,
    SortByViews,
    AscendantSortOrder,
    DescendantSortOrder,
    RedHue,
    OrangeHue,
    YellowHue,
    GreenHue,
    AquaHue,
    BlueHue,
    VioletHue,
    FuchsiaHue,
} = require('./parameters');
const {
    createColorRequest,
    createRandomColorRequest,
    createColorsRequest,
    createNewColorsRequest,
    createTopColorsRequest,
    createPaletteRequest,
    createRandomPaletteRequest,
    createPalettesRequest,
    createNewPalettesRequest,
    createTopPalettesRequest,
    createPatternRequest,
    createRandomPatternRequest,
    createPatternsRequest,
    createNewPatternsRequest,
    createTopPatternsRequest,
    createLoverRequest,
    createLoversRequest,
    createNewLoversRequest,
    createTopLoversRequest,
} = require('./requests');
const {
    getColor,
    getColors,
    getPalette,
    getPalettes,
    getPattern,
    getPatterns,
    getLover,
    getLovers,
} = require('./parsers');


module.exports = {
    // SortBy constants
    SortByDateCreated: SortByDateCreated,
    SortByScore: SortByScore,
    SortByName: SortByName,
    SortByVotes: SortByVotes,
    SortByViews: SortByViews,
    // SortOrder constants
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
    // Colors requests
    createColorRequest: createColorRequest,
    createRandomColorRequest: createRandomColorRequest,
    createColorsRequest: createColorsRequest,
    createNewColorsRequest: createNewColorsRequest,
    createTopColorsRequest: createTopColorsRequest,
    // Palettes requests
    createPaletteRequest: createPaletteRequest,
    createRandomPaletteRequest: createRandomPaletteRequest,
    createPalettesRequest: createPalettesRequest,
    createNewPalettesRequest: createNewPalettesRequest,
    createTopPalettesRequest: createTopPalettesRequest,
    // Patterns requests
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
    // Parse responses
    getColor: getColor,
    getColors: getColors,
    getPalette: getPalette,
    getPalettes: getPalettes,
    getPattern: getPattern,
    getPatterns: getPatterns,
    getLover: getLover,
    getLovers: getLovers,
};
