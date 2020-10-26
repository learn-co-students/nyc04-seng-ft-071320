import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import FoxContainer from './Components/FoxContainer'
import './App.css';
import {connect} from 'react-redux'


class App extends React.Component{

  componentDidMount(){
    fetch("http://localhost:3000/foxes")
      .then(res => res.json())
      .then((foxesArray) => {
        this.props.setFoxes(foxesArray)
      })          
  }

  render(){
    console.log(this.props, "APP");
    return(
      <div>
        <h1>Welcome to Fox Pets</h1>
        <Link to="/foxes">All the Foxes</Link>

        <Switch>

          <Route path="/foxes">
            <FoxContainer/>
          </Route>

        </Switch>
      </div>
    )
  }
}


// First argument of the first ():
    // mapStateToProps (Get information)
    // mapStateToProps is a callback:
        // mapStateToProps' first argument is the globalStateObj 
        // mapStateToProps returns a POJO that will be merged into the props of the component

// Second argument of the first ():
  // mapDispatchToProps (Sending Information)
    // mapDispatchToProps is a POJO that will be merged into the props of the component


let setFoxes = (array) => {
  return {
    type: "SET_FOXES_PLEASE",
    payload: array
  }
}


let mapDispatchToProps = {
  setFoxes: setFoxes  
}

export default connect(null, mapDispatchToProps)(App);
