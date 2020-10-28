import React from 'react'
import './App.css'
import NavBar from './Components/Navbar'
import LoginForm from './Components/LoginForm'
import BurgerContainer from './Components/BurgerContainer'
import Home from './Components/Home'


import {Switch, Route} from 'react-router-dom'

class App extends React.Component{

  state={
    burgers: [],
    token: "",
    username: "",
    // Set up the backend first
  }

  componentDidMount(){
    fetch("http://localhost:3000/burgers")
      .then(res => res.json())
      .then(burgers => {
        this.setState({
          burgers: burgers
        })
      })

    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.helpHandleResponse)
    }

  }

  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:3000/login", {
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
      console.resp(resp.error)
    } else {
      localStorage.token = resp.token
      // What else do we do with the response?
    }
  }

  renderForm = (routerProps) => {
    return <LoginForm handleSubmit={this.handleLogin}/>
  }

  renderBurgerContainer = (routerProps) => {
    return <BurgerContainer burgers={this.state.burgers} token={this.state.token}/>
  }

  render(){
    return(
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={this.renderForm}/>
          <Route path="/burgers" render={this.renderBurgerContainer}/>

        </Switch>
      </div>
    )
  }
}

export default App