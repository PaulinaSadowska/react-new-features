import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {

    const [notes, notesDispatch] = useReducer(notesReducer, [])

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
            <NoteList notes={notes} removeNote={removeNote} />
            <AddNoteForm
                dispatch={notesDispatch} />
        </div>
    )
}

export { NoteApp as default };