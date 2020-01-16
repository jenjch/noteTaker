// ===============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// ===============================================================================

// need to edit; figure our how to write to JSON db file and read JSON db file
var database = require("../db/db.json");


// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // need to update
  app.get("/api/notes", function(req, res) {
    res.json(database);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data, i.e saves a note (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User types out a note... this data is then sent to the server...
  // Then the server saves the data to the database array)
  // ---------------------------------------------------------------------------

  // need to update
  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });


// need to figure out correct code for delete
  app.delete("/api/notes/:id", function(req, res) {
    
  });

};

