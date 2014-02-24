/**
 * rider test
 * 
 * @author firede(firede@firede.us)
 */

var stylus = require('stylus');
var fs = require('fs');
var path = require('path');
var rider = require('../lib/rider');
var should = require('should');

var casesPath = path.join(__dirname, './cases');

// test cases
var cases = fs.readdirSync(casesPath).filter(function (file) {
    return ~file.indexOf('.styl');
}).map(function (file) {
    return file.replace('.styl', '');
});


describe('rider test', function () {
    cases.forEach(function (test) {
        var name = test.replace(/[-.]/g, ' ');

        it(name, function () {
            var stylPath = path.join(__dirname, 'cases', test +'.styl');
            var cssPath = path.join(__dirname, 'cases', test + '.css');
            var styl = fs.readFileSync(stylPath, 'utf8').replace(/\r/g, '');
            var css = fs.readFileSync(cssPath, 'utf8').replace(/\r/g, '').trim();

            var style = stylus(styl).set('filename', path).use(rider());

            style.render(function (err, actual) {
                if (err) throw err;
                actual.trim().should.equal(css);
            });
        });
    });
});
