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
            setHTML('active-note', NoActiveNoteView)
            return
        }
        setHTML('active-note', AppState.activeNote.ActiveNoteView)
    }

    SetActiveNote(noteId) {
        console.log(noteId)
        notesService.SetActiveNote(noteId)
    }

    AddNewNote() {
        event.preventDefault()
        const form = event.target
        const noteFormInfo = getFormData(form)
        console.log(noteFormInfo)
        notesService.AddNewNote(noteFormInfo)
    }

    DeleteActiveNote(noteId) {
        notesService.DeleteActiveNote(noteId)
    }

}
function NoActiveNoteView() {
    return `
    <div class="col-3">
            <div>Select New Note</div>
            <div></div>
            <div></div>
        </div>
        <div class="col-8">
            <textarea onblur="functiontosavenote" class="form-control" name="body" id="body" cols="30"
                rows="10"></textarea>
        </div>
    `
}