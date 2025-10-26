import React from 'react'

const NoteCard = ( {note} ) => {
  const data = JSON.parse(note.body)
  return (
    <div>
      {data}
    </div>
  )
}

export default NoteCard