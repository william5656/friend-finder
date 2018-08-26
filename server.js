var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');


var app = express();

var PORT = process.env.PORT || 8080 ;

app.use(express.static(path.join(__dirname, "./app/public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
require("./app/routes/apiRoutes")(app); 
require('./app/routes/htmlRoutes')(app);

//starts server
app.listen(PORT, function(){   
    console.log("App listening on POST: " + PORT);
});