/**
 * @file rider demo
 * @author firede(firede@firede.us)
 */

var path = require('path');
var http = require('http');

var connect = require('connect');
var serveStatic = require('serve-static');

var stylus = require('stylus');
var rider = require('./lib/rider');
var ap = require('autoprefixer-core');

var app = connect();
var port = 8888;

function compile(str, filePath) {
    return stylus(str)
        .set('filename', filePath)
        .define('url', stylus.resolver())
        .use(rider())
        .on('end', prefixer);
}

function prefixer(_, css) {
    return ap(
        {
            browsers: [
                '> 5%',
                'iOS >= 6',
                'Android >= 2.3',
                'ExplorerMobile >= 10'
            ]
        }
    ).process(css).css;
}

app.use(stylus.middleware({
    src: path.join(__dirname, 'demo'),
    compile: compile
}));

app.use(
    serveStatic(path.join(__dirname, 'demo'))
);

http.createServer(app).listen(port, function () {
    console.log('Rider demo started on port %d', port);
});
