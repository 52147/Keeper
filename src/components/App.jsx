// import use state
import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  // use useState hook to track the state in the addNote and deleteNote function
  // const[current state, update function] = useState(initialize state);
  const [notes, setNotes] = useState([]);

  // add Note function : set the new note in array
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; // add newNote in exisiting array
    }); // ... spread operator: ...prevNotes copy of existing array
  }

  // delete Note function : set the note that filter out the noy matched id item in the array
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        // use map function and Note component to
        // displat the each Note
        // map function: create a new array populated with a result of calling a provided function
        // on every element in the calling array
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
