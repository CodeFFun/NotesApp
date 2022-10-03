import { useState, useEffect } from 'react'
import {MdOutlineCancelPresentation} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function Notes() {

  const[refreshValue, setRefreshValue] = useState('0')

  useEffect(() => {
    
  },[ refreshValue])

  const [notes, setNotes ] = useState('')

  const onChange= (e) => {
    setNotes(e.target.value)
  }

  const remove = (e) => {
    const index = e.target.parentElement.getAttribute('id')
    const currentData =JSON.parse(localStorage.getItem('notes'))
    currentData.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(currentData ))
    setRefreshValue(refreshValue - 1)
  } 

 const add = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  
  if (localStorage.getItem("notes")?.length ) {
    const currentData = JSON.parse(localStorage.getItem("notes"))
    const newData = [...currentData, notes]
    localStorage.setItem("notes", JSON.stringify(newData))
  }else {
    localStorage.setItem("notes", JSON.stringify([notes]))
  }
  
  
  setNotes('')

  setRefreshValue(refreshValue + 1)

 }
 
  return (
    
    <div> 
       {localStorage.getItem("notes")?.length ? (
        <div className='note-div'>
          {
            JSON.parse(localStorage.getItem("notes")).map((item,key ) => (
              <div className='notes-content ' key= {key} id={key}>
              <MdOutlineCancelPresentation className='icons cancel' onClick={remove}/>
              <textarea className='body-content input' value={item} onChange={onChange} readOnly></textarea>
            </div>
           ))
            }
           <div className='notes-content blue'>
             <AiOutlinePlusCircle className='icons add' onClick={add}/>
             <textarea className='body-content input' value={notes} onChange={onChange}></textarea>
           </div> 
        
        </div>
       ) : (
        <div className='note-div'> 
           <div className='notes-content blue'>
             <AiOutlinePlusCircle className='icons add' onClick={add}/>
             <textarea className='body-content input' value={notes} onChange={onChange}></textarea>
           </div> 
        </div>
       )
          
      
      }
        

    </div>


    
  )
}

export default Notes