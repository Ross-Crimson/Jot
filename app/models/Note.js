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
                    <div>NoteIdentifier</div>
                </div>
            </div>
        `
    }

    get ActiveNoteView() {
        return `
        `
    }
}