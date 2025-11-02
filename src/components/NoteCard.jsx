import React from 'react'

const NoteCard = ( {note} ) => {
  const data = JSON.parse(note.body)
  const colors = JSON.parse(note.colors)
  return (
    <div style={{backgroundColor : colors.colorBody, color : colors.colorHeader}}> 
      <textarea>
      {data}
      </textarea>
    </div>
  )
}

export default NoteCard