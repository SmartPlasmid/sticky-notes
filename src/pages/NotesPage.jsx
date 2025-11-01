import React from 'react'
import NoteCard from '../components/NoteCard'
import { fakeData as notes} from '../assets/fakedata'

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => {
        return <NoteCard note={note}/>
      })} 
    </div>
  )
}

export default NotesPage