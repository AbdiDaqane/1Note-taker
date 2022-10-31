//Serving and manipulating notes in database
const fs = require("fs").promises;
const path = require("path");

//Specify path for database
const dbFilePath = path.join(__dirname, "../Develop/db/db.json");

//Function that will get notes from database
const getNote = async () => JSON.parse(await fs.readFile(dbFilePath));

//Function that will append note to database
const saveNote = async (note) => {
  const notes = await getNote(); // is an array of note objects; it happens to have length of 1
console.log(notes)
  //Assign id to note same as its index
  note.id = notes.length;
  notes.push(note); // push is a method of arrays; it adds one more item to the end of an array

  await fs.writeFile(dbFilePath, JSON.stringify(notes));

  return note;
};

//Function that will delete note from database
const deleteNote = async (noteId) => {
  const notes = await getNote();

  //Remove note with its id(id is equal to index)
  notes.splice(noteId, 1);

  //Reassigning all notes with correct id
  for (let i in notes) {
    notes[i].id = i;
  }

  await fs.writeFile(dbFilePath, JSON.stringify(notes));
};

module.exports = {
  getNote,
  saveNote,
  deleteNote,
};