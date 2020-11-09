
import React,{ useState }  from 'react';
import Dropdown from 'react-dropdown';

let pagesize=3 ;




const PaginationAssign = (props)=>{
  let [currentindex, setCurrentindex] = useState(0);
  
  const options = [
   'edit', 'delete'
  ];
  const defaultOption ="...";
   //let currentindex=0;
    const totalsize=props.students.length,numberofpage=Math.ceil(props.students.length/pagesize) ;
    const arr = Array.from(new Set(props.students));
    
    
    const print =(currentindex)=>{
        return(
        arr.map((student,index) =>  
           (index>=currentindex&&index<currentindex+pagesize)?
           <div className="notebox" key={index} >
             <Dropdown  value={defaultOption} className="dropdown" options={options} onChange={(e)=>
                {
                    props.onSelect(index,e.value);
                    e.value= "...";
                }
                } /> 
            <p> {student.content}</p>
             <p className="date_time"> {student.time}  {student.date}</p>  
            </div>
                :null
             )
        )
        }

    return (
    <div>
    {/* <Input /> */}
        <div>{print(currentindex)}</div>
        <div className="pagination-css">
            <button onClick={()=>setCurrentindex(0)}> ←←← </button>
            <button  onClick={()=>setCurrentindex((currentindex-pagesize>=0?currentindex-pagesize:0))}> ← </button> 
            <button onClick={()=>setCurrentindex((currentindex+pagesize<totalsize?currentindex+pagesize:(numberofpage-1)*pagesize))}> → </button> 
            <button  onClick={()=>setCurrentindex((numberofpage-1)*pagesize)}>→→→ </button>
        </div>
    </div>
    )
}



export default PaginationAssign;