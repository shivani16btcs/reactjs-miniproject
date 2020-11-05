import React from 'react';
const Reducer = (props)=>{
 return (
     
<div>
    
</div>

    )
}



export default Reducer;






// import "../../Peekameet.css"
// import React, { useState } from 'react';
// import Displaynote from './Displaynote'
// const Addnote = (props)=>{
//  const [note,setNote]=useState({date:"",time:"", content:""});
//  const [notes,setNotes]=useState([]);
//     const itemEvent =(e)=>{
//          console.log(e.target.name);
//         note[e.target.name]= e.target.value;
//          setNote(note);
//         console.log(note);
//     };
//     const listNotes=()=>{
//         setNotes((oldNotes)=>{
//             return[note,...oldNotes];
//         })
//         alert(notes);
//     }
    
//  return (
//    <div>
//        <div className="center_div">
//            <br/>
//            <h1> Add Note</h1>
//            <br/>

//            <form name="noteForm"  onSubmit= {listNotes}>
//            <input type="date" name="date" value={note.date} placeholder="Add Date"  onChange={itemEvent} />
//            <input type="time" name="time" value={note.time} placeholder="Add time" onChange={itemEvent} />
//            <input type="text"  name="content" value={note.content} placeholder="Add Note" onChange={itemEvent} />
//            <button type="submit" >Save</button>
//            </form>
//         <ol>
//             {notes.map((item,index)=>{
//              return <Displaynote key={index} id={index} note={item}/>
//            // return <li key={index} id={index} >{note.date}   {note.time}  {note.content} {note}</li>
                
//             })}
//         </ol>
//        </div>
//    </div>
//     )
// }



// export default Addnote;