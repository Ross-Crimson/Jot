import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { notesService } from "../services/NotesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
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

    DrawDummyNote() {
        const dummyHTML = `<div class="mt-5 text-center">
        Select a Note
    </div>`
        setHTML('active-note', dummyHTML)
    }

    SetActiveNote(noteId) {
        notesService.SetActiveNote(noteId)
    }

    UpdateActiveNote() {
        // @ts-ignore
        const textNoteArea = event.target.value
        notesService.UpdateActiveNote(textNoteArea)
    }

    AddNewNote() {
        event.preventDefault()
        const form = event.target
        const noteFormInfo = getFormData(form)
        notesService.AddNewNote(noteFormInfo)
        // @ts-ignore
        form.reset()
    }

    async DeleteActiveNote(noteId) {
        let choice = await Pop.confirm("Delete This Note Forever?", "You worked real hard on it", "Delete", "question")
        if (!choice) return
        notesService.DeleteActiveNote(noteId)
        this.DrawDummyNote()
    }

}