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

    get NoteView() {
        return `
        `
    }
}