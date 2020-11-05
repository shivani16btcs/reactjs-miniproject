import "../../Peekameet.css"
import React  from 'react';
import {Link} from 'react-router-dom';

const Header_login = (props)=>{

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
        {/* <div className="Sign-In"> <button> Logout </button></div> */}
        <Link to='/signin' className="Sign-In">Logout</Link>
        {/* <div className="Sign-Up"><button>Sign Up</button></div> */}
        </div>
    </div>
</div>

    )
}



export default Header_login;