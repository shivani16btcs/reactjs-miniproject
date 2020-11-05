import "../../Peekameet.css"
import React,{ useState }  from 'react';
import {Redirect} from 'react-router-dom';
import Header from '../Header/Header_Notlogin';
const SignIn = (props)=>{
    let [fields, setFields] = useState([{email:"",password:""}]);
    let [errors, setErrors] = useState([{email:"",password:""}]);
    let [loggedin,setLoggedin]=useState(false);
const handleChange=(e)=>{
    fields[e.target.name] = e.target.value;
    setFields(fields)
}

const validateForm=()=> {

    // let fields = fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*required";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }



      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*required";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!(fields["password"].length >= 8)) {
            errors.password = "* Password must be 8 characters long.";
          } else if (!fields["password"].match(/(?=.*[0-9])/)) {
            formIsValid = false;
            errors["password"] = "*Invalid password. Must contain one number";
          }
        
      }
      setErrors(errors);
      return formIsValid;
}


const submituserRegistrationForm=(e)=> {
    e.preventDefault();
    if (validateForm()) {
        if(fields["email"]==="bhagyashree.srivastava@daffodilsw.com"&&fields["password"]==="Hrhk@1234")
        {
          localStorage.setItem("token","hsjdfgduhfnvmcnvaslkhkjdsh");
            alert("login sucessfully");
            setLoggedin(true);
            //return  <Redirect  to="/profile" />
        }
     }
  }

if(loggedin){
  return <Redirect  to="/profile" />
}
 return (
<div className="Outer">
<Header/>
<div className="Middle-green"> 
    <div className="onMiddle">
    <img src="img/group-18.jpg"
        srcSet="img/group-18@2x.jpg 2x,
                img/group-18@3x.jpg 3x"
        className="Group-18" alt="1"/>
    <p className="PEEKaMEET-lets-you-n"> <span className="para">PEEKaMEET </span> lets you network more efffectively <br/>
    to achieve your bussiness and career goals</p>
    <div className="Tag"> 
        <div className="freelancer_Rectangle "> <div className="Freelancer">Freelancer </div></div>
        <div className="Job_Rectangle "> <div className="Job">Job Seeker </div></div>
        <div className="enterpreneur_Rectangle "><div className="enterpreneur"> Enterpreneur </div></div>
        <div className="mompreneur_Rectangle "><div className="mompreneur"> Mompreneur </div></div>
        <div className="Intership_Rectangle "> <div className="Internship">InternShip Seeker </div></div>
        <div className="Environmental-Change_Rectangle "><div className="Environmental-Change"> Environmental Change Maker </div></div>
    </div>
    <p className="Build-and-manage-you"> Build and manage your network with PEEKaMEET</p>
    <br/>
    <div className="signinForm">
        <form   name="userRegistrationForm"  onSubmit= {submituserRegistrationForm} >
        <label className="Email">Email</label>
        <input className="Rectangle-Copy-6"  value={fields["email"]} onChange={handleChange}  type="text" placeholder="Enter email" name="email" required />
        <div className="isa_error">{errors.email}</div>

        <label className="psw" >Password</label>
        <input className="Rectangle-Copy-6" value={fields["password"]} onChange={handleChange} type="password" placeholder="Enter Password" name="password" required />  
        <div className="isa_error">{errors.password}</div>

        <button className="Signin_Button" type="submit">Login</button>
        </form>   

        <div className="Rememberme">
        <input type="checkbox"  name="remember" className="rememberMe-checkbox" /><p className="Remember-Me">Remember me </p> 
        <a href="/" className="forget"> Forget Password </a>
        </div>  
    </div>
    </div>
</div>

</div>

    )
}



export default SignIn;