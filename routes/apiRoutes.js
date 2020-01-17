// LOAD DATA; linking our routes to "data" sources.

// replaced require with path in order to write to jSON file (issues with correct path errors when using require)
// var database = require("../db/db.json");

// need to write to JSON
const fs = require("fs");
const path = require("path");

// ROUTING

module.exports = function(app) {
  
  // API GET Request; below code handles when users "visit" a page.
  // (ex: localhost:PORT/api/notes... they are shown a JSON of the data in the table)

  // retrieve from JSON file to display
  app.get("/api/notes", function(req, res) {
    // first read the db.json file to display the existing notes data
    var database = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"))
    );

    return res.json(database);
  });

  // API POST Request; below code handles when a user submits data to the server.
  // i.e saves a note (a JSON object)

  // saves the note and writes (adds) to JSON
  app.post("/api/notes", function(req, res) {
    // first read the db.json file to display the existing notes data
    var database = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"))
    );

    // this is the data of the added note
    var newNote = req.body;

    // instead of incrementing id, use Math.random() to assign a unique id to each added note (added to existing array in req.body)
    newNote.id = Math.random();

    // console.log(typeof req);
    // console log the entire "stored" JSON, and the new saved note
    console.log(database, newNote);

    // push to add new note to end of JSON array
    database.push(newNote);

    // write to JSON file (stringify)
    fs.writeFile("./db/db.json", JSON.stringify(database), function(err) {
      if (err) throw err;
      console.log("JSON database updated!");
    });

    // this code completes the "update" to page (rather than needing to refresh page)
    res.json(newNote);
  });

  // API DELETE Request; below code removes data of clicked entry with matching id 
  app.delete("/api/notes/:id", function(req, res) {
    // first read the db.json file to display the existing notes data
    var database = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"))
    );
    // var deletedNote = req.params.id;

    // method that filters out everything except for note that should be deleted
    const filtered = database.filter(note => note.id != req.params.id);

    // console log the request returned from clicking trash (deleted note)
    console.log(req.params.id);
    // console log the data from the filter method (should NOT include the deleted note)
    console.log(filtered);

    // write filtered (everything but deleted note) to JSON file (stringify)
    fs.writeFile("./db/db.json", JSON.stringify(filtered), function(err) {
      if (err) throw err;
      console.log("JSON database updated (note deleted)!");
    });

    // this "send" allows strings, completes the "update" to page (instead of needing to refresh page)
    res.send("note deleted");
  });
};
