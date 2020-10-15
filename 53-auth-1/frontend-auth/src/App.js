import React from 'react';
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'
// withRouter is a function that takes in a component and returns a component
  // Sprinkles in additional props to the original component
  // Higher Ordered Component (Higher Ordered Functions)

// Redirect is a component 
  // When it's rendered to the page, it'll redirect the page

class App extends React.Component {

  state = {
    id: 0,
    username: "",
    snacks: []
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
      .then((resp) => {
        if(resp.error){
          console.error(resp.error)
        } else {

          this.setState({
            id: resp.id,
            username: resp.username,
            snacks: resp.snacks
          })
          this.props.history.push("/profile")
        }
      })


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
    .then(resp => {
      if(resp.error){
        console.error(resp.error)
      } else {

        this.setState({
          id: resp.id,
          username: resp.username,
          snacks: resp.snacks
        })
        this.props.history.push("/profile")
      }
    })
  
  }


  renderForm = (routerProps) => {
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
    // return <Redirect/> in render of <Route/>
    if(this.state.id){
      return <ProfileContainer 
        username={this.state.username} 
        snacks={this.state.snacks} 
        id={this.state.id}
      />
    } else {
      return <Redirect to="/login" />
    }

  }






  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}



let magicalComponent = withRouter(App)
export default magicalComponent
















//
