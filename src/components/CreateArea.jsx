import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab"; // Floating action button
import Zoom from "@mui/material/Zoom"; // Zoom transition can be used to expand the material

// Props are used to communicate between components.
function CreateArea(props) {
  // useState hook to track the isExpanded state
  // const[current sate of block, update block to expand] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  // useState hook to track the user input note
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // handle the change when user click
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  // sumbmit function:
  // when we click submit, note be added in app.jsx
  // and set the note sate to empty title and empty content
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); // preventDefault : cancel the event of submitting
  }

  // when expand be called, we set the isExpanded to true
  // when text area be click, isExpanded become true.
  // when isEpand is true, we render the title, content and fab
  function expand() {
    setExpanded(true);
  }

  // zoom in = {true} : if true, component will transition in
  // so isExpanded is true, fab will render
  return (
    <div>
      <form className="create-note">
        {
          // isExpanded become true, we render the title, content
          // otherwise we'll render nothing
          isExpanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )
        }
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // if isExpanded is true, we render 3 rows, otherwise we render 1 row
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
