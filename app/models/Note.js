import { generateId } from "../utils/GenerateId.js"

export class Note {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.color = data.color
        this.body = data.body
        this.createdDate = data.createdDate == undefined ? new Date() : new Date(data.createdDate)
        this.lastEdited = data.lastEdited == undefined ? new Date : new Date(data.lastEdited)
        this.bgImg = data.bgImg
    }

    get NoteSelectorView() {
        return `
        <div onclick="app.NotesController.SetActiveNote('${this.id}')" class="py-3" data-bs-dismiss="offcanvas">
                <div>
                    <div style="color:${this.color}">${this.name}</div>
                </div>
            </div>
        `
    }

    get ActiveNoteView() {
        return `
            <div class="row p-5 rounded note-area-background" style="border-color: ${this.color}; background-image: url(${this.bgImg})">
                <div class="col-3">
                    <h4 style="color:${this.color}">${this.name}</h4>
                    <div class="pt-3">${this.CreatedDateFormatted}</div>
                    <div class="pt-3">${this.LastEditedTimeFormatted}</div>
                </div>
                <div class="col-8">
                    <textarea onblur="app.NotesController.UpdateActiveNote()" class="form-control" name="body" id="body" cols="30"
                        rows="20" >${this.NoteBodyText}</textarea>
                </div>
                <div class="col-1">
                    <div  class="fs-1"><i onclick="app.NotesController.DeleteActiveNote('${this.id}')" type="button" class="mdi mdi-delete-circle"></i></div>
                </div>
            </div>
        `
    }

    get NoteBodyText() {
        if (this.body == undefined) return ''
        else return this.body
    }

    get CreatedDateFormatted() {
        return this.createdDate.toLocaleString()
    }

    get LastEditedTimeFormatted() {
        return this.lastEdited.toLocaleString()
    }

    get BackgroundImg() {
        return
    }
}