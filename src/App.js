import React, { Component } from 'react';
import {  Route, Switch ,Redirect} from 'react-router-dom';
import Footer from './Component/Footer/Footer';

// import PaginationAssign from "./PaginationAssign/PaginationAssign";
import SignIn from "./Component/SignIn/SignIn" ;
import Profile from "./Component/Profile/Profile";
class App extends Component {
  
  
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
