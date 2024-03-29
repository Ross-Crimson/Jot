import { generateId } from "../utils/GenerateId.js"

export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.color = data.color
        this.body = data.body
        this.createdDate = data.createdDate == undefined ? new Date() : new Date(data.createdDate)
        this.lastEdited = data.lastEdited == undefined ? new Date : new Date(data.lastEdited)
    }

    get NoteSelectorView() {
        return `
        <div onclick="app.NotesController.SetActiveNote('${this.id}')">
                <div class="notes">
                    <div style="color:${this.color}">${this.name}</div>
                </div>
            </div>
        `
    }

    get ActiveNoteView() {
        return `
        <div class="col-3">
                <div style="color:${this.color}">${this.name}</div>
                <div>${this.createdDate}</div>
                <div>${this.lastEdited}</div>
            </div>
            <div class="col-8">
                <textarea onblur="app.NotesController.UpdateActiveNote()" class="form-control" name="body" id="body" cols="30"
                    rows="10">${this.NoteBodyText}</textarea>
            </div>
            <div class="col-1">
                <div onclick="app.NotesController.DeleteActiveNote('${this.id}')" type="button"><i class="mdi mdi-delete-circle"></i></div>
            </div>
        `
    }

    get NoteBodyText() {
        if (this.body == undefined) return ''
        else return this.body
    }
}