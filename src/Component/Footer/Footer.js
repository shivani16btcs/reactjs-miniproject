import "../../Peekameet.css"
import React from 'react';
const Footer = (props)=>{
 return (
    <div className="onfoot">
    <div className="PEEKaMEET2020">PEEKaMEET@2020</div>
    <div className="Follow-Us">Follow Us </div>
    <img src="img/instagram-fill.jpg"
     srcSet="img/instagram-fill@2x.jpg 2x,
             img/instagram-fill@3x.jpg 3x"
     className="instagram-fill" alt="1"></img>
    <img src="img/youtube-fill.png"
     srcSet="img/youtube-fill@2x.png 2x,
             img/youtube-fill@3x.png 3x"
     className="youtube-fill" alt="1"></img>

    <img src="img/facebook-box-fill.png"
     srcSet="img/facebook-box-fill@2x.png 2x,
             img/facebook-box-fill@3x.png 3x"
     className="facebook-box-fill" alt="1"></img>
    <img src="img/twitter-fill.png"
     srcSet="img/twitter-fill@2x.png 2x,
             img/twitter-fill@3x.png 3x"
     className="twitter-fill" alt="1">
         </img>

    <div className="FAQs">FAQs </div>
    <div className="Terms-Conditions ">Terms Conditions  </div>
    <div className="Privacy-Policy">Privacy Policy </div>
    <div className="About-Us-Copy">About Us </div>
    <div className="Press">Press </div>
    <div className="Contact-Us">Contact Us </div>
    <div className="Perks"> Perks</div>
    <div className="Blog">Blog </div>
</div>
    )
}



export default Footer;