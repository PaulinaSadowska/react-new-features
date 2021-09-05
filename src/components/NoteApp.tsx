import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context';
import { ActionType } from '../reducers/notes'
import { NoteData } from './Note';


const NoteApp = () => {

    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes')
        if (savedNotes) {
            const notes: NoteData[] = JSON.parse(savedNotes)
            dispatch({ type: ActionType.POPULATE_NOTES, notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export { NoteApp as default };