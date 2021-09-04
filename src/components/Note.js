import React, { useEffect } from 'react';

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

export { Note as default };