import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"

class NotesService {
    AddNewNote(noteFormInfo) {
        let newNote = AppState.notes.push(new Note(noteFormInfo))
        AppState.activeNote = AppState.notes[newNote - 1]
        this.SaveNotes()
    }

    UpdateActiveNote(textNoteArea) {
        AppState.activeNote.body = textNoteArea
        //console.log(AppState.notes)
        this.SaveNotes()
    }

    DeleteActiveNote(noteId) {
        const noteToDeleteIndex = AppState.notes.findIndex(note => note.id == noteId)
        AppState.notes.splice(noteToDeleteIndex, 1)
        //AppState.activeNote = null
        this.SaveNotes()
    }

    SetActiveNote(noteId) {
        AppState.activeNote = AppState.notes.find(note => note.id == noteId)
    }

    SaveNotes() {
        saveState('notes', AppState.notes)
    }

    LoadNotes() {
        const notesFromLocalStorage = loadState('notes', [Note])
        AppState.notes = notesFromLocalStorage
    }
}

export const notesService = new NotesService