'use strict';

const assert = require('assert');
const request = require('request');
const ColourLovers = require('../src/index');

suite('request', function () {
    test('#1', function (done) {
        request(ColourLovers.createColorRequest('#FFFFFF'), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getColor(body));
                done();
            }
        });
    });
    test('#2', function (done) {
        request(ColourLovers.createColorsRequest(), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getColors(body));
                done();
            }
        });
    });
    test('#3', function (done) {
        request(ColourLovers.createPaletteRequest(1), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getPalette(body));
                done();
            }
        });
    });
    test('#4', function (done) {
        request(ColourLovers.createPalettesRequest(), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getPalettes(body));
                done();
            }
        });
    });
    test('#5', function (done) {
        request(ColourLovers.createPatternRequest(1), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getPattern(body));
                done();
            }
        });
    });
    test('#6', function (done) {
        request(ColourLovers.createPatternsRequest(), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getPatterns(body));
                done();
            }
        });
    });
    test('#7', function (done) {
        request(ColourLovers.createLoverRequest('COLOURlover'), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getLover(body));
                done();
            }
        });
    });
    test('#8', function (done) {
        request(ColourLovers.createLoversRequest(), { json: true }, (err, res, body) => {
            if (err) {
                console.log(err);
                done(err);
            } else {
                console.log(ColourLovers.getLovers(body));
                done();
            }
        });
    });
});
