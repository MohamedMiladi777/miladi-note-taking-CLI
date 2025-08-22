import fs from "node:fs/promises";
//first we construct the path
const DB_PATH = new URL("../db.json", import.meta.url).pathname;

//make a function to read the path

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
  //Parse takes a json string and turns it into js object
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

//strigify does the opposite of parsing a json to js
/**
 * Inserting takes json, turn it into js and then back to json again
 */

export const insertDB = async (note) => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
