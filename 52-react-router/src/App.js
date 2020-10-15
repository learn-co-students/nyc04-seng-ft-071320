import React, {Component} from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'
import Character from './CharacterComponents/Character'

// Line below will look in the CharacterComponents folder
  // Look for an index.js
import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';



// Routing stuff
// When <Route> is rendered, we are putting components behind paths

// When you wrap <Route> with a <Switch>, only one of the routes will ever show up

// <Link > is a fancy anchor tag
// < NavLink > is a fancy anchor tag, but when the URL matches the path, it has a className called "active"

import { Route, Switch, Link, NavLink } from 'react-router-dom'

// Way 1:
  // <Route path="/cat" component={Cat} />

// Way 2:
  // <Route path="/cat"> <Cat ...send props /> </Route>

// Way 3:
  // <Route path="/cat" render={(routerProps) => <Cat ...send props/>}/>


class App extends Component {

  state = {
    characters: []
  }





  componentDidMount(){
    this.setState({
      characters: [
        {
          id: 1,
          name: "The Cat in the Hat",
          gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif",
          slug: "cat",
        },
        {
          id: 2,
          name: "Horton",
          gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif",
          slug: "horton",
        },
        {
          id: 3,
          name: "The Lorax",
          gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif",
          slug: "lorax"
        },
        {
          id: 5,
          name: "Thing2",
          gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
          slug: "thing2",
        },
     ]
    })
  }





  renderSpecificCharacter = (routerProps) => {
    let whatUserTyped = routerProps.match.params.id
    let foundCharacter = this.state.characters.find((characterPOJO) => {
      return characterPOJO.id === parseInt(whatUserTyped)
    })  
    if(foundCharacter){
      return <Character name={foundCharacter.name} gif={foundCharacter.gif}/>
    } else {
      return <NotFound />
    }

  }





  render() {

    let arrayOfLinks = this.state.characters.map((characterPOJO) => {
      return (
        <NavLink 
          key={characterPOJO.id} 
          to={`/characters/${characterPOJO.id}`}>
            {characterPOJO.name}
        </NavLink>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <Header/>
            <aside className="sidebar">
              <ul>
                { arrayOfLinks }
              </ul>
            </aside>
        </header>

        <main>

          <Switch>
            {/* SPLASH/LANDING PAGE AT THE TOP */}
            <Route path="/" exact component={Home} />

            <Route path="/characters/:id" render={this.renderSpecificCharacter}/>
            
            {/* 404 PAGE AT THE BOTTOM */}
            <Route component={NotFound} />
          </Switch>

        </main>
      </div>
    );
  }
}


export default App