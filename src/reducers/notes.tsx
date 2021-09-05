import type { NoteData } from '../components/Note'

interface Action {
}

class AddNoteAction implements Action {
    note: NoteData

    constructor(note: NoteData) {
        this.note = note
    }
}

class RemoveNoteAction implements Action {
    title: string

    constructor(title: string) {
        this.title = title
    }
}

class PopulateNoteAction implements Action {
    notes: Array<NoteData>

    constructor(notes: Array<NoteData>) {
        this.notes = notes
    }
}


const notesReducer = (state: any, action: Action) => {
    if (action instanceof AddNoteAction) {
        return [...state, action.note]
    } else if (action instanceof RemoveNoteAction) {
        return state.filter((note: any) => note.title !== action.title)
    } else if (action instanceof PopulateNoteAction) {
        return action.notes
    } else {
        return state
    }
}

export { AddNoteAction, RemoveNoteAction, PopulateNoteAction, notesReducer as default };
export type { Action };