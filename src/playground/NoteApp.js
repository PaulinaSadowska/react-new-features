import React, { useState, useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.note]
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        case 'POPULATE_NOTES':
            return action.notes
        default:
            return state
    }
}

export const NoteApp = () => {

    const [notes, notesDispatch] = useReducer(notesReducer, [])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const saveNote = (e) => {
        e.preventDefault()
        notesDispatch({ type: 'ADD_NOTE', note: { title, body } })
        setTitle("")
        setBody("")
    }

    const removeNote = (title) => {
        notesDispatch({ type: 'REMOVE_NOTE', title })
    }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        if (notes) {
            notesDispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map((note) => (
                    <Note
                        key={note.title}
                        note={note}
                        removeNote={removeNote}
                    />
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

const Note = ({ note, removeNote }) => {

    useEffect(() => {
        console.log("hello")
        return () => {
            console.log("clean up")
        }
    }, [])

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    );
}