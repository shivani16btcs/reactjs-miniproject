import "../../Peekameet.css"
import React from 'react';
const Displaynote = (props)=>{
   
    
 return (
   <div>
       {/* <li> {props.note}</li> */}
        <li>{props.note.date}   {props.note.time}  {props.note.content}</li>
       <div>
       <button className="btn">edit  </button> 
      
        <button className="btn">delete</button>
       </div>
   </div>
    )
}



export default Displaynote;