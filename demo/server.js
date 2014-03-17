var express = require('express');
var stylus = require('stylus');
var rider = require('../lib/rider');
var ap = require('autoprefixer');
var path = require('path');
var http = require('http');
var fs = require('fs');

var app = express();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('resolve url', true)
        .use(rider())
        .on('end', prefixer);
}

function prefixer(err, css) {
    return ap('android >= 2.3', 'ios >= 5', 'ie 10').process(css).css;
}

app.set('port', process.env.PORT || 8848);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    compile: compile
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:page?', function (req, res) {
    var page = req.params.page || 'index';
    var viewPath = path.join(app.get('views'), page + '.ejs');

    if (fs.existsSync(viewPath)) {
        res.set('Content-Type', 'text/html');
        res.render(page);
    }
    else {
        res.send(404);
    }
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Rider example started on port ' + app.get('port'));
});
