// dependencies
var express = require("express");

// sets up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// need to connect this to read the CSS file in the public folder ("static files")
app.use(express.static('public'));

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// for the notes homework if you are getting CORS issues try
// npm i cors
// var cors = require("cors")
// app.use(cors())
// app.options("*", cors())
// this will allow any domain to use your API
