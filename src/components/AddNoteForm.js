import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {

    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const onSubmitNote = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NOTE', note: { title, body } })
        setTitle("")
        setBody("")
    }

    return (
        <div>
            <p>add note:</p>
            <form onSubmit={onSubmitNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input value={body} onChange={(e) => setBody(e.target.value)}></input>
                <button>add note</button>
            </form>
        </div>
    );
}

export { AddNoteForm as default };