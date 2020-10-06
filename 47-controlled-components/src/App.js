import React from 'react';
import Header from './Header'
import StoreContainer from './StoreContainer'
import arrayOfStores from './database'
import Form from './Form'

import './App.css';

  // Parent's state can be sent down as props
    // state -> props (OK)
  // Child's props should not become child's state
    // props -> state (X)


class App extends React.Component {

  state = {
    stores: arrayOfStores
  }

  creditCard = (infoFromChild) => {
    console.log(infoFromChild, "IN APP")
  }

  render(){

    return (
      <div className="App">
        < Header title="Storey Time"/>
        < Form 
          creditCard={this.creditCard}
        />
        < StoreContainer stores={this.state.stores} />
  
      </div>
    );
  }
  
}

export default App;
