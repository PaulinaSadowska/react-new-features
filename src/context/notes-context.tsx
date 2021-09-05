import React from "react";
import { Action } from '../reducers/notes'

const NotesContext = React.createContext({ notes: [], dispatch: (action: Action) => { } });

export { NotesContext as default };