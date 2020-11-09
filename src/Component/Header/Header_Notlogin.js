import "../../Peekameet.css"
import React from 'react';
const Header_Notlogin = (props)=>{
 return (
     
<div className="onToprectangle">
    <div className="header_left">
        <div className="logo">
        <div className="Oval">
            {/* <div className="Path1"></div>
            <div className="Path2"></div>
            <div className="Path3"></div>
            <div className="Path4"></div>
            <div className="Path5"></div>
            <div className="Path6"></div>
            <div className="Path7"></div> */}
        </div>
        <div className="PeekameetText">PEEKaMEET</div>  
        <div > <button className="Sign-In "> SignIn </button></div>
        <div ><button className="Sign-Up ">SignUp</button></div>
        </div>
    </div>
</div>

    )
}



export default Header_Notlogin;