import "../../Peekameet.css"
import React,{useState} from 'react';
import Header from '../Header/Header_login';
// import Addnote from '../Addnote/Addnote';
import ADD from '../Addnote/ADD';
import Detail from '../Addnote/Detail';
const Profile = (props)=>{
    // let [token,setToken]=useState(localStorage.getItem("token"));
 let [tog,setTog]=useState("note");
    // if(token==null){
    //     setLoggedin(false);
    // }
    // if(loggedin==false){
    //     return <Redirect  to="/signin" />
    //   }
const toggle=(e)=>{
    setTog(e.target.value);
}
 return (
<div>
<Header/>
<div className="ProfileOuter" >
<div className="photobg"></div>
<div className="profilePhoto"></div>
<div className="Username">Robert Smith</div>
<div className="Userposition">CEO</div>
<div className="Gold_brand">Gold Brands</div>
<div className="video"></div>
<div className="golbutton"></div>
<button className="messagebutton"> Message</button>
<button className="contactbutton">Save Contact</button>

<div className="noteanddetail">
<button className="DETAIL" value="detail" onClick={toggle}> Details</button>
<button className="NOTE"  value="note"  onClick={toggle}>Notes </button>
</div>
<hr className="hrline"></hr>
{(tog==="detail")?<Detail />: <ADD/>}
</div>
</div>

)}



export default Profile;