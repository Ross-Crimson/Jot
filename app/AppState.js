import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Note } from './models/Note.js'

class ObservableAppState extends EventEmitter {
  /**@type {Note[]} */
  notes = [
    new Note({
      name: 'First Note',
      color: '#e10921',
      body: 'This is the first note'
    })

  ]

  /**@type {Note} */
  activeNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())