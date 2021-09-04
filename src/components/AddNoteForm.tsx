import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {

    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const position = useMousePosition()

    const onSubmitNote = (e: any) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NOTE', note: { title, body } })
        setTitle("")
        setBody("")
    }

    return (
        <React.Fragment>
            <p>add note:</p>
            <p>{position.x}, {position.y}</p>
            <form onSubmit={onSubmitNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input value={body} onChange={(e) => setBody(e.target.value)}></input>
                <button>add note</button>
            </form>
        </React.Fragment>
    );
}

export { AddNoteForm as default };