var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

// Init the app
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, '/dist/images/favicon.png')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || 8080);

// http://api.coinmarketcap.com/v1/ticker/ethereum/
function getEthPrice(cb){
     getCoinmarketcap('ethereum',cb);
}

// http://api.coinmarketcap.com/v1/ticker/ethereum/
function getRepPrice(cb){
     getCoinmarketcap('augur',cb);
}

function getCoinmarketcap(currency,cb){
     var opts = {
          host: 'api.coinmarketcap.com',
          port: '80',
          path: '/v1/ticker/' + currency + '/',
          method: 'GET'
     };

     var req = http.request(opts, function (res) {
          var data = '';

          res.on('data', function (chunk) {
               data += chunk;
          });

          res.on('end', function () {
               var p = JSON.parse(data);

               // TODO: need some error checking...
               cb(null,p[0].price_usd);
          });
     });

     req.write('');
     req.end();
}

// Routes
app.get('/', function(req, res) {
     getEthPrice(function(err,ethPrice){
          if(err){
               console.log('Can not get ETH price...');
          }

          getRepPrice(function(err,repPrice){
               if(err){
                    console.log('Can not get REP price...');
               }

               var data = {
                    repPrice: repPrice,
                    ethPrice: ethPrice,
                    initialFuturePrice: 5.0
               };

               res.render('token2',data);
          });
     });
});

app.get('/token', function(req, res) {
	res.render('token');
});

app.get('/token2', function(req, res) {
	res.render('token2');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	
	// respond with html page
	if (req.accepts('html')) {
	    res.render('404', { url: req.url });
	    return;
	}
	
	next(err);
});

// error handlers
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
