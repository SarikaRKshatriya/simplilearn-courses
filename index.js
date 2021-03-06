
    var express  = require('express');
    var app      = express();                        // create our app w/ express
    var mongoose = require('mongoose');  
    var morgan   = require('morgan');              // mongoose for mongodb
    var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var port     = process.env.PORT || 8888;         // set the port



    MongoClient = require('mongodb').MongoClient,

    url = 'mongodb://localhost:27017/courses',

    mongoose.connect(url);   

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    require('./app/routes.js')(app);
   
   
    app.listen(port);
    console.log("App listening on port : " + port);





 