
// ===============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// ===============================================================================

// need to edit; figure our how to write to JSON db file and read JSON db file
var database = require("../db/db.json");
// need to increment
let noteId = 1;

// need to write to JSON
const fs = require ('fs')

// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  // need to update (retrieve from JSON file to display)
  app.get("/api/notes", function(req, res) {
    return res.json(database);

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data, i.e saves a note (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User types out a note... this data is then sent to the server...
  // Then the server saves the data to the database array)
  // ---------------------------------------------------------------------------

  // need to update (add to JSON file) and add id
  app.post("/api/notes", function(req, res) {
      var newNote = req.body;
      // console.log(typeof req);
      console.log(database, newNote);
      database.push(newNote);
    
      fs.writeFile('./db/db.json', JSON.stringify(database), function (err) {
        if (err) throw err;
        console.log('JSON database updated!');
      });
    
    // increment id 


    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
   
    // app.post("/api/characters", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
    //   var newCharacter = req.body;
    
    //   console.log(newCharacter);
    
    //   characters.push(newCharacter);
    
    //   res.json(newCharacter);
    // });



  });


// need to figure out correct code for delete
  app.delete("/api/notes/:id", function(req, res) {

    // id should be same back and front end 

    // app.get("/api/characters/:character", function(req, res) {
    //   var chosen = req.params.character;
    
    //   console.log(chosen);
    
    //   for (var i = 0; i < characters.length; i++) {
    //     if (chosen === characters[i].routeName) {
    //       return res.json(characters[i]);
    //     }
    //   }
    
    //   return res.json(false);
    // });
    
    
  });

};

