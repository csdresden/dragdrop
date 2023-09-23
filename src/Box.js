import { memo, useState } from 'react'
const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
  height: '100px'
}
export const Box = memo(function Box({ title, yellow, preview }) {
  const [titleneu, settitleneu] = useState(title)
  const backgroundColor = yellow ? 'yellow' : 'white'
  return (
    <div>
      
    <div
      style={{ ...styles, backgroundColor }}
      role={preview ? 'BoxPreview' : 'Box'}
    >
       <input
            id="snapToGridAfterDrop"
            type="button"
           
            onClick={function(e){
         
              settitleneu(titleneu + '1')
            }}
          />
      {titleneu}
    </div>
    </div>
  )
})
