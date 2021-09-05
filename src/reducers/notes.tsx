import type { NoteData } from '../components/Note'

enum ActionType {
    ADD_NOTE,
    REMOVE_NOTE,
    POPULATE_NOTES
}

interface AddNoteAction {
    type: ActionType.ADD_NOTE;
    note: NoteData;
}

interface RemoveNoteAction {
    type: ActionType.REMOVE_NOTE;
    title: string;
}

interface PopulateNoteAction {
    type: ActionType.POPULATE_NOTES;
    notes: Array<NoteData>;
}

type Action = AddNoteAction | RemoveNoteAction | PopulateNoteAction

const notesReducer = (state: any, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_NOTE:
            return [...state, action.note];
        case ActionType.POPULATE_NOTES:
            return action.notes;
        case ActionType.REMOVE_NOTE:
            return state.filter((note: any) => note.title !== action.title)
        default:
            return state;
    }
}

export { ActionType, notesReducer as default };
export type { Action };