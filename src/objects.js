'use strict';


class Color {

    constructor() {

        // Unique id for this Color
        this.id = undefined;
        // Title / Name of the Color
        this.title = undefined;
        // Username of the Color's creator
        this.userName = undefined;
        // Number of views this Color has received
        this.viewsCount = undefined;
        // Number of votes this Color has received
        this.votesCount = undefined;
        // Number of comments this Color has received
        this.commentsCount = undefined;
        // Number of hearts this Color has
        this.hearths = undefined;
        // This Color's rank on COLOURlovers.com
        this.rank = undefined;
        // Date this Color was created
        this.dateCreated = undefined;
        // This Color's hex value
        this.hex = undefined;
        // RGB breakdown of this Color
        this.rgb = undefined;
        // HSV breakdown of this color
        this.hsv = undefined;
        // This Color's description
        this.description = undefined;
        // This Color's COLOURlovers.com URL
        this.url = undefined;
        // Link to a png version of this Color
        this.imageUrl = undefined;
        // Link to a COLOURlovers.com badge for this Color
        this.badgeUrl = undefined;
        // This Color's COLOURlovers.com API URL
        this.apiUrl = undefined;
    }
}

class Palette {

    constructor() {

        // Unique id for this Palette
        this.id = undefined;
        // Title / Name of the Palette
        this.title = undefined;
        // Username of the Palette's creator
        this.userName = undefined;
        // Number of views this Palette has received
        this.viewsCount = undefined;
        // Number of votes this Palette has received
        this.votesCount = undefined;
        // Number of comments this Palette has received
        this.commentsCount = undefined;
        // Number of hearts this Palette has
        this.hearths = undefined;
        // This Palette's rank on COLOURlovers.com
        this.rank = undefined;
        // Date this Palette was created
        this.dateCreated = undefined;
        // List of Colors within this Palette (as HEX values)
        this.colors = undefined;
        // This Palette's Color's widths. Ranges from 0.0 to 1.0
        this.colorsWidths = undefined;
        // This Palette's description
        this.description = undefined;
        // This Palette's COLOURlovers.com URL
        this.url = undefined;
        // Link to a png version of this Palette
        this.imageUrl = undefined;
        // Link to a COLOURlovers.com badge for this Palette
        this.badgeUrl = undefined;
        // This Palette's COLOURlovers.com API URL
        this.apiUrl = undefined;
    }
}

class Pattern {

    constructor() {

        // Unique id for this Pattern
        this.id = undefined;
        // Title / Name of the Pattern
        this.title = undefined;
        // Username of the Pattern's creator
        this.userName = undefined;
        // Number of views this Pattern has received
        this.viewsCount = undefined;
        // Number of votes this Pattern has received
        this.votesCount = undefined;
        // Number of comments this Pattern has received
        this.commentsCount = undefined;
        // Number of hearts this Pattern has
        this.hearths = undefined;
        // This Pattern's rank on COLOURlovers.com
        this.rank = undefined;
        // Date this Pattern was created
        this.dateCreated = undefined;
        // List of Colors within this Pattern (as HEX values)
        this.colors = undefined;
        // This Pattern's description
        this.description = undefined;
        // This Pattern's COLOURlovers.com URL
        this.url = undefined;
        // Link to a png version of this Pattern
        this.imageUrl = undefined;
        // Link to a COLOURlovers.com badge for this Pattern
        this.badgeUrl = undefined;
        // This Pattern's COLOURlovers.com API URL
        this.apiUrl = undefined;
    }
}

class Lover {

    constructor() {

        // This Lover's Username
        this.userName = undefined;
        // Date this Lover registered with COLOURlovers.com
        this.dateRegistered = undefined;
        // Date this Lover was last active on COLOURlovers.com
        this.dateLastActive = undefined;
        // This Lover's rating
        this.rating = undefined;
        // This Lover's location
        this.location = undefined;
        // Number of Colors this Lover has made
        this.colorsCount = undefined;
        // Number of Palettes this Lover has made
        this.palettesCount = undefined;
        // Number of Patterns this Lover has made
        this.patternsCount = undefined;
        // Number of comments this Lover has made
        this.commentsCount = undefined;
        // Number of Lovers [friends] this Lover has
        this.loversCount = undefined;
        // Number of comments this Lover has on their profile
        this.commentsOnProfileCount = undefined;
        // Last 10 comments made on this Lover's profile
        this.comments = undefined;
        // This Lover's COLOURlovers.com URL
        this.url = undefined;
        // This Lover's COLOURlovers.com API URL
        this.apiUrl = undefined;
    }
}

class ColorsStats {

    constructor() {
        // Total number of colors, palettes, patterns or lovers in the COLOURlovers system
        this.total = undefined;
    }
}

class PalettesStats {

    constructor() {
        // Total number of colors, palettes, patterns or lovers in the COLOURlovers system
        this.total = undefined;
    }
}

class PatternsStats {

    constructor() {
        // Total number of colors, palettes, patterns or lovers in the COLOURlovers system
        this.total = undefined;
    }
}

class LoversStats {

    constructor() {
        // Total number of colors, palettes, patterns or lovers in the COLOURlovers system
        this.total = undefined;
    }
}


module.exports = {
    Color: Color,
    Palette: Palette,
    Pattern: Pattern,
    Lover: Lover,
    ColorsStats: ColorsStats,
    PalettesStats: PalettesStats,
    PatternsStats: PatternsStats,
    LoversStats: LoversStats,
};
