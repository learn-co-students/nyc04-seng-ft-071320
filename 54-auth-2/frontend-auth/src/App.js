import React from 'react';
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'


class App extends React.Component {


  // The existence of the token is the boolean for whether someone is logged in or not
    // The way you send a token to the backend is in the headers, under the key of Authorization
  state = {
    id: 0,
    username: "",
    snacks: [],
    token: ""
  }


  componentDidMount(){
    if(localStorage.token){
      // Any time that you want to CRUD user information, send the token to the backend

      // Any time that you send the token to the backend, the controller action needs a:
        // before_action :authorized
      fetch("http://localhost:3000/users/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.helpHandleResponse)


    }
  }


  handleLogOut = () => {
    this.setState({
      id: 0,
      username: "",
      snacks: [],
      token: ""
    })
    localStorage.clear()
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.helpHandleResponse)


  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
  
  }


  helpHandleResponse = (resp) => {
    if(resp.error){
      console.error(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        username: resp.user.username,
        snacks: resp.user.snacks,
        token: resp.token
      })
      this.props.history.push("/profile")
    }
  }


  renderForm = (routerProps) => {
    if(this.state.token){
      return <button onClick={this.handleLogOut}>Log Out</button>
    }
    
    if(routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }





  renderProfile = (routerProps) => {
    if(this.state.token){
      return <ProfileContainer 
        username={this.state.username} 
        snacks={this.state.snacks} 
        id={this.state.id}
        token={this.state.token}
        addSnack={this.addSnack}
      />
    } else {
      return <Redirect to="/login" />
    }

  }



  addSnack = (snack) => {
    let copyOfSnacks = [...this.state.snacks, snack]
    this.setState({
      snacks: copyOfSnacks
    })
  }


  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}



let magicalComponent = withRouter(App)
export default magicalComponent
















//
