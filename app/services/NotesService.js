import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"

class NotesService {
    AddNewNote(noteFormInfo) {
        AppState.notes.push(new Note(noteFormInfo))
    }

    UpdateActiveNote(textNoteArea) {
        AppState.activeNote.body = textNoteArea
        //console.log(AppState.notes)
    }

    DeleteActiveNote(noteId) {
        const noteToDeleteIndex = AppState.notes.findIndex(note => note.id == noteId)
        AppState.notes.splice(noteToDeleteIndex, 1)
        //AppState.activeNote = null
    }

    SetActiveNote(noteId) {
        AppState.activeNote = AppState.notes.find(note => note.id == noteId)
        console.log(AppState.activeNote)
    }
}

export const notesService = new NotesService