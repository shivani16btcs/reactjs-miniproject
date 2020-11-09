import "../../Peekameet.css"
import React,{ useState }  from 'react';
// import Displaynote from './Displaynote';
import Pagination_display from '../PaginationAssign/PaginationAssign'
const ADD = (props)=>{
    let [toggle_addform, setToggle_addform] = useState(false);
    let [field, setField] = useState([]);
    let [errors, setErrors] = useState([]);
    let [checkedit,setcheckedit]=useState("");
    let [checkeditindex,setcheckeditindex]=useState();
    let [notes,setNotes]=useState([ {content: "First Gray colors are displayed using an equal ",date: "2020-11-10",time: "11:44"},
    {content: "second  equal amount of power to all of the light sources. ",date: "2020-11-10",time: "11:44"},
    {content: "third Gray colors are dif power to all of the light sources.",date: "2020-11-10",time: "11:44"},
    {content: " fourth Gray colors are displayede light sources.",date: "2020-11-10",time: "11:44"},
    {content: "fifth Gray colors are dto all of the light sources.",date: "2020-11-10",time: "11:44"},
    {content: "sixth Gray colors are displayed using an equal ",date: "2020-11-10",time: "11:44"}]);

    const handleChange=(e)=>{
    field[e.target.name] = e.target.value;
    setField(field)
}

const validateForm=()=> {

    // let fields = fields;
    let errors = {};
    let formIsValid = true;
    if (!field["date"]) {
        formIsValid = false;
        errors["date"] = "*required";
      }
      if (!field["time"]) {
        formIsValid = false;
        errors["time"] = "*required";
      }
      if (!field["content"]) {
        formIsValid = false;
        errors["content"] = "*required";
      }
      if (typeof field["content"] !== "undefined") {
        if (!(field["content"].length <= 300)) {
            formIsValid = false;
            errors.content = "* note must be less then 300 characters ";
          } 
      }
      setErrors(errors);
      return formIsValid;
}


const Addnote=(e)=> {
       e.preventDefault();
    if (validateForm()) {
         console.log(field);
        if(checkedit===""){
         let p=[field,...notes];
        setNotes(p);
        // console.log(notes.length);
        p=[]
        setField(p);
        Togglefun();
        }
        else if(checkedit==="edit")
        {
            let p=[...notes];
            p[checkeditindex]=field;
            setNotes(p);
        }
     }
  }

  const Togglefun=()=>{
      let p=!toggle_addform;
      setToggle_addform(p);
  }

  const DropdownEdit=(index,value)=>{
      if(value==="delete"){
        setNotes((olditem)=>{
            return olditem.filter((notes,i)=>{
                return i!==index;
            })
        }) 
      }
      if(value==="edit"){
        setcheckedit(value);
        setcheckeditindex(index); 
        console.log(notes[index]);
        setField(notes[index]);
        Togglefun();
        setcheckedit("");
      }
  }
 return (
<div>
{ (toggle_addform===true)?
    <div className="signinForm">
        <form   name="userRegistrationForm"  onSubmit= {Addnote} >
        <div className="abovefield">
        <label className="date  Follow-Up-Date" >Follow Up Date</label>
        <input className="date_field " value={field["date"]} onChange={handleChange} type="date" name="date"  />  
        <div className="isa_error">{errors.date}</div>

        <label className="time" >time</label>
        <input className="time_field " value={field["time"]} onChange={handleChange} type="time"  name="time"  />  
        <div className="isa_error">{errors.time}</div>
        </div>
        <br></br>
        <label className="content_Notes" >content</label><br></br><br></br>
        <input className="field_content" value={field["content"]} onChange={handleChange} type="content" placeholder="write here" name="content" required />  
        <div className="isa_error">{errors.content}</div>
        <br></br>
        <button className="NOTE_save" type="submit">Save</button>
        <button className="NOTE_cancel" onClick={Togglefun} >Cancel</button>
        </form>   
    </div>
    :
    <div>
    <button className="NOTE noteform" onClick={Togglefun} type="submit"> Add Note</button>
    <hr className="hrline"></hr>
    
            {/* {notes.map((item,index)=>{
                return <Displaynote key={index} id={index} note={item}/>
            })} */}

           <Pagination_display students={notes} onSelect={DropdownEdit} ></Pagination_display> 
    
    </div>
}
   
    
</div>

    )
}



export default ADD;