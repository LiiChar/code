const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQlite database.");
    db.run(
      `
      CREATE TABLE IF NOT EXISTS content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        nameFile TEXT NOT NULL,  
        type VARCHAR(255) NOT NULL, 
        content TEXT NOT NULL,
        description TEXT NULL,
        user_id INTEGER NOT NUll
    );
    
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        image TEXT NULL
    )`,
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Successefuly created table content");
        }
      }
    );
  }
});

module.exports = db;
