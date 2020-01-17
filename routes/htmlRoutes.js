
// dependencies; need to include the path package to get the correct file path for our html
var path = require("path");

// ROUTING
module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    
    // "*"" covers all options except "/", still needs an individual "/" home page path
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
  
    // this route directs to the notes html
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
  
    // If no matching route is found default to home, the index file (home page with start button that leads to notes page)
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };