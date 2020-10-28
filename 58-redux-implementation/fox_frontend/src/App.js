import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import FoxContainer from './Components/FoxContainer'
import LoginForm from './Components/LoginForm'
import ShowFox from './Components/ShowFox'
import PetsContainer from './Components/PetsContainer'

import './App.css';
import {connect} from 'react-redux'


class App extends React.Component{

  componentDidMount(){
    fetch("http://localhost:3000/foxes")
      .then(res => res.json())
      .then((foxesArray) => {
        this.props.setFoxes(foxesArray)
      })   
      
    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in",{
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.token){
          this.props.setUserInfo(resp)
        }
      })

    }
  }


  showSingleFox = (routerProps) => {
    let id = routerProps.match.params.id
    let num_id = parseInt(id)
    let foundFox = this.props.allFoxes.find(fox => fox.id === num_id)

    if(foundFox){
      return <ShowFox {...routerProps} foundFox={foundFox}/>
    } else {
      return <p>404 Page</p>
    }
  }

  render(){
    return(
      <div>
        <h1>Welcome to Fox Pets</h1>
        <Link to="/foxes">All the Foxes</Link>
        <Link to="/frontend_login">Login</Link>

        <Switch>
          

          <Route path="/foxes" exact>
            <FoxContainer/>
          </Route>

          <Route path="/foxes/:id" render={this.showSingleFox} />
          <Route path="/pets" exact component={PetsContainer}/>
     

          <Route path="/frontend_login" component={LoginForm}/>

        </Switch>
      </div>
    )
  }
}


// First argument of the first ():
    // mapStateToProps (Get information)
    // mapStateToProps is a callback:
        // mapStateToProps' first argument is the globalStateObj 
        // mapStateToProps' second argument is the ownProps
        // mapStateToProps returns a POJO that will be merged into the props of the component

        
// Second argument of the first ():
  // mapDispatchToProps (Sending Information)
    // mapDispatchToProps is a POJO that will be merged into the props of the component
    // Action creator -> Function definition down
    // Invoke that action creator within the component -> Function invocation up

let setFoxes = (array) => {
  return {
    type: "SET_FOXES_PLEASE",
    payload: array
  }
}

let setUserInfo = (userInfo) => {
  return {
      type: "SET_USER_INFO",
      payload: userInfo
  }
}

let mapDispatchToProps = {
  setFoxes: setFoxes,
  setUserInfo: setUserInfo 
}

let mapStateToProps = (gState) => {
  return {
    allFoxes: gState.foxesInformation.foxes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
