var express = require('express');
var stylus = require('stylus');
var rider = require('../lib/rider');
var ap = require('autoprefixer');
var path = require('path');

var app = express();

function compile(str, filePath) {
    return stylus(str)
        .set('filename', filePath)
        .set('resolve url', true)
        .use(rider())
        .on('end', prefixer);
}

function prefixer(err, css) {
    return ap(
        {
            browsers: ['Android >= 2.3', 'iOS >= 5', 'ExplorerMobile >= 10']
        }
    ).process(css).css;
}

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    compile: compile
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:page?', function (req, res) {
    var page = req.params.page || 'index';
    var viewPath = path.join(app.get('views'), page + '.ejs');
    var fs = require('fs');

    if (fs.existsSync(viewPath)) {
        res.set('Content-Type', 'text/html');
        res.render(page);
    }
    else {
        res.status(404).end();
    }
});

var server = app.listen(8888, function () {
    console.log('Rider example started on port %d', server.address().port);
});
