import type { NoteData } from '../components/Note'

/*
type State = {
    notes: Array<NoteData>
}

const initialState: State = {
    notes: []
}

enum ActionKind {
    AddNote = 'ADD_NOTE',
    RemoveNote = 'REMOVE_NOTE',
    PopulateNote = 'POPULATE_NOTES'
}

interface Action {
    type: ActionKind,
}*/

const notesReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.note]
        case 'REMOVE_NOTE':
            return state.filter((note: any) => note.title !== action.title)
        case 'POPULATE_NOTES':
            return action.notes
        default:
            return state
    }
}

export { notesReducer as default };