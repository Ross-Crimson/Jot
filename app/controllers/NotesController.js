import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { notesService } from "../services/NotesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML, setText } from "../utils/Writer.js"

export class NotesController {
    constructor() {
        this.DrawNotes()
        AppState.on('activeNote', this.DrawActiveNote)
        AppState.on('notes', this.DrawNotes)
        notesService.LoadNotes()
    }

    DrawNotes() {
        const notes = AppState.notes
        let existingNotesHTML = ''
        notes.forEach(note => existingNotesHTML += note.NoteSelectorView)
        setHTML('existing-notes', existingNotesHTML)
        setText('total-notes', AppState.notes.length)
    }

    DrawActiveNote() {
        if (AppState.activeNote == null) {
            //setHTML('active-note', NoActiveNoteView)
            return
        }
        setHTML('active-note', AppState.activeNote.ActiveNoteView)
    }

    SetActiveNote(noteId) {
        notesService.SetActiveNote(noteId)
    }

    UpdateActiveNote() {
        const textNoteArea = event.target.value
        notesService.UpdateActiveNote(textNoteArea)
    }

    AddNewNote() {
        event.preventDefault()
        const form = event.target
        const noteFormInfo = getFormData(form)
        notesService.AddNewNote(noteFormInfo)
        form.reset()
    }

    DeleteActiveNote(noteId) {
        notesService.DeleteActiveNote(noteId)
    }

}