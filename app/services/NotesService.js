import { AppState } from "../AppState.js"

class NotesService {
    SetActiveNote(noteId) {
        AppState.activeNote = AppState.notes.find(note => note.id == noteId)
        console.log(AppState.activeNote)
    }
}

export const notesService = new NotesService