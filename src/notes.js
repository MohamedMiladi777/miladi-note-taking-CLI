import { insertDB, getDB, saveDB } from "./db.js";

/**I-Creating a new note
 * 1- Plan: Input: takes note ; output: return a note
 * We get the db and then insert the note and then save the db
 * 2- Pseudocode: fun (note) : note {
 *  getDB()
 * insertDB(note)
 * saveDB()
 * return db
 *
 * }
 */

export const createNote = async (note, tags) => {
  const newNote = {
    tags: tags,
    id: Date.now(),
    content: note,
  };

  await insertDB(newNote);
  return newNote;
};

/**II- getAll notes
 * 1- Plan: Input: nothing; output: returns the entire db
 * 2- Pseudocode:
 * fun () : db {
 *  return db = getDB()
 * }
 *
 */

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

/**III- FindNote
 * 1- Plan : Input => the note to be filtered, output the filtered note
 * 2- PsuedoCode
 * fn(findNote) : note {
 * db = getDB()
 * filteredNote = db.filter(findNote)
 * return filteredNote
 * }
 */
export const findNote = async (note) => {
  const notes = await getAllNotes();
   return notes.filter((item) =>
    item.content.toLowerCase().includes(note.toLowerCase())
  );
};

/**IV- Remove note
 * 1- Plan : input: a note to remove , output removed note
 * 2- PseudoCode :
 * fn(note) : note {
 * notes = findNote()
 * notes.map(){splice idx}
 * }
 */
export const removeNote = async (id) => {
  const { notes } = await getDB();
  const match = notes.filter((note) => note.id === id);

  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
  }
  await saveDB({ notes: newNotes });
  return id;
};

export const removeAllNotes = () => saveDB({ notes: [] });
