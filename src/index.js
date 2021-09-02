import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const NoteApp = () => {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const saveNote = (e) => {
    e.preventDefault()
    setNotes([...notes, { title, body }])
    setTitle("")
    setBody("")
  }

  const removeNote = (title) => {
    const filteredNotes = notes.filter((note) => note.title !== title)
    setNotes(filteredNotes)
  }

  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map((note) => (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
          </div>
        ))
      }
      <p>add note:</p>
      <form onSubmit={saveNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input value={body} onChange={(e) => setBody(e.target.value)}></input>
        <button>add note</button>
      </form>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
