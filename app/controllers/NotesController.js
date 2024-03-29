import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML, setText } from "../utils/Writer.js"

export class NotesController {
    constructor() {
        this.DrawNotes()
    }

    DrawNotes() {
        const notes = AppState.notes
        let existingNotesHTML = ''
        notes.forEach(note => existingNotesHTML += note.NoteSelectorView)
        setHTML('existing-notes', existingNotesHTML)
    }

    SetActiveNote(noteId) {
        console.log(noteId)
        notesService.SetActiveNote(noteId)
    }
}