import React, { FunctionComponent, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';
import { RemoveNoteAction } from '../reducers/notes'

type NoteData = {
    title: string,
    body: string
}

interface NoteProps {
    note: NoteData
}

const Note: FunctionComponent<NoteProps> = ({ note }) => {

    const { dispatch } = useContext(NotesContext)

    const position = useMousePosition()

    const removeNote = (title: string) => {
        dispatch(new RemoveNoteAction(title))
    }

    return (
        <aside>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>{position.x}, {position.y}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </aside>
    );
}

export { Note as default };
export type { NoteData };