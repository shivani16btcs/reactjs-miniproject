import "../../Peekameet.css"
import React, { useState } from 'react';
import Displaynote from './Displaynote'
const Addnote = (props)=>{
    const [note,setNote]=useState({date:"",time:"", content:""});
    const [notes,setNotes]=useState([]);
    const itemEvent =(event)=>{
        console.log(event.target);
        note[event.target.name]=event.target.value;
         setNote(note);
        //console.log(note);
    };
    const listNotes=()=>{
        console.log([note,...notes])
        setNotes((oldNotes)=>{
            return[note,...oldNotes];
        })
        setNote({date:"",time:"", content:""});
    }
 return (
   <div>
       <div className="center_div">
           <br/>
           <h1> Add Note</h1>
           <br/>
           {/* <form> */}
           <input type="date" name="date" value={note.date} placeholder="Add Date"  onChange={itemEvent} />
            <input type="time" name="time" value={note["time"]} placeholder="Add time" onChange={itemEvent} />
           <input type="text" name="content" value={note["content"]}  placeholder="Add Note"onChange={itemEvent} />
           <button  type="submit" onClick={listNotes} >Save</button>
           {/* </form> */}
        <ol>
            {notes.map((item,index)=>{
                return <Displaynote key={index} id={index} note={item}/>
            })}
        </ol>
       </div>
   </div>
    )
}



export default Addnote;



