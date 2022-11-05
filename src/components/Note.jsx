import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

// use props to let Note and App communicate
// Pass data to props in the App component
// when App get the data, it will pass as props to Note
function Note(props) {
  function handleClick() {
    // onDelete() will triger the deleteNote() at App.jsx
    props.onDelete(props.id);
  }
  // render the props properties title and content
  // wher user click the delete buttom
  // will go to handleClick function
  // and handleClick() will trigger deleteNote() and delete the node
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
