import sqlite3 from "sqlite3";
const something = sqlite3.verbose();
export const db = new something.Database(":memory:");
// db.serialize(() => {
//   db.run(`CREATE TABLE users (username string, hash string)`);
//   const stmt = db.prepare(`INSERT INTO user VALUES (username, hash)`);
//   for (let i = 0; i < 10; i++) stmt.run(`adding ${i}`);
//   stmt.finalize();
//   db.each(`SELECT rowid FROM users`, (err, row) => {
//     console.log(`${row.id}: ${row.info}`);
//   });
// });
// db.close();
