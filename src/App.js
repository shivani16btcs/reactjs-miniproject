import React, { Component } from 'react';
import {  Route, Switch ,Redirect} from 'react-router-dom';
import Footer from './Component/Footer/Footer';

// import PaginationAssign from "./PaginationAssign/PaginationAssign";
import SignIn from "./Component/SignIn/SignIn" ;
import Profile from "./Component/Profile/Profile";
class App extends Component {
  state = {
    students :[{rollno:"1",name:"A",emailid:"abc@gmail.com"},{rollno:"2",name:"B",emailid:"c@gmail.com"},{rollno:"3",name:"C",emailid:"ac@gmail.com"},{rollno:"4",name:"D",emailid:"bc@gmail.com"},
    {rollno:"5",name:"A1",emailid:"abc@gmail.com"},{rollno:"6",name:"B1",emailid:"a@gmail.com"},{rollno:"7",name:"C1",emailid:"a@gmail.com"},{rollno:"8",name:"D1",emailid:"a@gmail.com"},
    {rollno:"9",name:"A2",emailid:"abc@gmail.com"},{rollno:"10",name:"B2",emailid:"abc@gmail.com"},{rollno:"11",name:"C2",emailid:"abc@gmail.com"},{rollno:"12",name:"D2",emailid:"abc@gmail.com"},
    {rollno:"13",name:"A2",emailid:"abc@gmail.com"},{rollno:"14",name:"B3",emailid:"ab@gmail.com"},{rollno:"15",name:"C3",emailid:"ab@gmail.com"},{rollno:"16",name:"D3",emailid:"ab@gmail.com"}
    ]
  }
  
  render() {
    return (
      <div >
        {/* <PaginationAssign  students={this.state.students} /> */}
       
        {/* <SignIn /> */}
      <Switch>
        <Route  exact path="/" component={SignIn} />
        <Route  path="/signin" component={SignIn} />
        <Redirect from='/signin' to="/profile" />
        {/* <Redirect  to="/" /> */}
        <Route path="/profile" component={Profile}/>
      </Switch> 
      <Footer/>
      </div>
    );
  }
}


export default App;
