var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// load angular routes
var angularRoutes = require('./controllers/angularRoutes');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/partials/:name', angularRoutes.partials);
// attempt to handle angular directive routes
app.get('/templates/:name.html', angularRoutes.templates);

var server = app.listen(6898, function() {
	console.log('Express server listening on port ' + server.address().port);
});
