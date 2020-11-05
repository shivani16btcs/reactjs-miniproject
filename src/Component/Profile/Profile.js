import "../../Peekameet.css"
import React from 'react';
import Header from '../Header/Header_login';
import Addnote from '../Addnote/Addnote';
import axios from 'axios';
const Profile = (props)=>{
    // let [token,setToken]=useState(localStorage.getItem("token"));
    // let [loggedin,setLoggedin]=useState(true);
    // if(token==null){
    //     setLoggedin(false);
    // }
    // if(loggedin==false){
    //     return <Redirect  to="/signin" />
    //   }

 return (
<div>
<Header/>
<div className="ProfileOuter" >
<div className="photobg"></div>
<div className="profilePhoto"></div>

<Addnote/>
</div>
</div>

)}



export default Profile;