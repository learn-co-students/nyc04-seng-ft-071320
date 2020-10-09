import React from 'react';
import Header from './Header'
import StoreContainer from './StoreContainer'
import Form from './Form'
import Search from './Search'

import './App.css';

class App extends React.Component {

  state = {
    stores: [],
    searchTerm: ""
  }



  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }



  componentDidMount(){
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



  addDrinkToSpecificStore = (drinkObj, storeID) => {
    let foundStore = this.state.stores.find(store => store.id === storeID)
    let copyOfDrinks = [...foundStore.drinks, drinkObj]
    // CHANGE COPY OF DRINKS TO FIT YOUR CRUD NEEDS

    let copyOfStore = {
      ...foundStore, 
      drinks: copyOfDrinks
    }


    this.updateStoreFromState(copyOfStore)
    // let copyOfStores = this.state.stores.map((store) => {
    //   if(store.id === copyOfStore.id){
    //     return copyOfStore
    //   } else {
    //     return store
    //   }
    // })
    // this.setState({
    //   stores: copyOfStores
    // })

  }



  render(){
    let {stores, searchTerm} = this.state
    let filteredArray = stores.filter((store) => {
      return store.storeName.toLowerCase().includes(searchTerm.toLowerCase())
    })

  
    return (
      <div className="App">
        < Header title="Storey Time"/>
        < Search 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        < Form 
          addStoreToState={this.addStoreToState}
        />
        < StoreContainer 
          stores={filteredArray} 
          deleteStoreFromState={this.deleteStoreFromState}
          updateStoreFromState={this.updateStoreFromState}
          addDrinkToSpecificStore={this.addDrinkToSpecificStore}
        />
      </div>
    );
  }
  
}

export default App;
