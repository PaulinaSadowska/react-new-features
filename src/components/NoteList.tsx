import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';
import type { NoteData } from './Note'

const NoteList = () => {

    const { notes } = useContext(NotesContext)

    return (
        <React.Fragment>
            {notes.map((note: NoteData) => (
                <Note
                    key={note.title}
                    note={note}
                />
            ))}
        </React.Fragment>
    );
}

export { NoteList as default };




