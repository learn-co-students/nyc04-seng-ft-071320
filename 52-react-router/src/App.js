import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'
import Character from './CharacterComponents/Character'
import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';

class App extends React.Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Header/>
            <aside className="sidebar">
              <ul>
                
              </ul>
            </aside>
        </header>

        <main>
          <Home />
          <Cat/>
          <Horton/>
          <Lorax/>
          <Thing1/>
          <Thing2/>


        </main>

      </div>
    );
  }
}


export default App






// state = {
//   characters: [
//     {
//       id: 1,
//       name: "The Cat in the Hat",
//       gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif",
//       slug: "cat",
//     },
//     {
//       id: 2,
//       name: "Horton",
//       gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif",
//       slug: "horton",
//     },
//     {
//       id: 3,
//       name: "The Lorax",
//       gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif",
//       slug: "lorax"
//     },
//     {
//       id: 5,
//       name: "Thing2",
//       gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
//       slug: "thing2",
//     },
//  ]
// }