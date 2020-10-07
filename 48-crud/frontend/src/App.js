import React from 'react';
import Header from './Header'
import StoreContainer from './StoreContainer'

import Form from './Form'

import './App.css';

// Class Components can:
  // - Hold state
  // - Have lifecycle methods

// Component Lifecycle: 
  // Render down
  // Mount up

// With state:
  // Same place as you define it is where the setState has to come from

// React event occurs (Can be a user-triggered event or a lifecycle method)
// Make a fetch request
// With the response, setState to change the DOM

// Lifecycle methods are independent from Fetches
  // Not all of our fetches need to be inside lifecycle methods

class App extends React.Component {

  state = {
    stores: []
  }


  componentDidMount(){

    // Similar to DOMContentLoaded
    // Great place to make requests when the page loads
      // <App/> gets mounted only once
    fetch("http://localhost:3000/stores")
      .then(res => res.json())
      .then((arrayOfStores) => {
        this.setState({
          stores: arrayOfStores
        })
      })


  }


  addStoreToState = (newlyCreatedStore) => {
    let copyOfStores = [...this.state.stores, newlyCreatedStore]
    this.setState({
      stores: copyOfStores
    })

  }

  deleteStoreFromState = (deletedID) => {
    let copyOfStores = this.state.stores.filter(storeObj => {
      return storeObj.id !== deletedID
    })
    this.setState({
      stores: copyOfStores
    })

  }

  updateStoreFromState = (updatedObj) => {
    let copyOfStores = this.state.stores.map((store) => {
      if(store.id === updatedObj.id){
        return updatedObj
      } else {
        return store
      }
    })

    this.setState({
      stores: copyOfStores
    })

  }


  render(){
    console.log(this.state.stores)
    return (
      <div className="App">
        < Header title="Storey Time"/>
        < Form 
          addStoreToState={this.addStoreToState}
        />
        < StoreContainer 
          stores={this.state.stores} 
          deleteStoreFromState={this.deleteStoreFromState}
          updateStoreFromState={this.updateStoreFromState}
        />
  
      </div>
    );
  }
  
}

export default App;
