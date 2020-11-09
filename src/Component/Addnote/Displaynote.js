import "../../Peekameet.css"
import React from 'react';
const Displaynote = (props)=>{
   
    
 return (
   <div>
       <div className="notebox">
           <p> {props.note.content}</p>
          <p className="date_time"> {props.note.time}  {props.note.date}</p>  
       <div>
       {/* <button className="btn">edit  </button> 
      
        <button className="btn">delete</button> */}
       </div>
       </div>
   </div>
    )
}



export default Displaynote;