import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ROUTING STUFF HERE
import {BrowserRouter} from 'react-router-dom'

// REDUX STUFF HERE
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

// Below is a reducer (func. definition)
  // The return value of our reducer BECOMES our global state



// ----- Fox Reducer -----

let initialStateOfFoxReducer = {
  foxes: [],
}

let foxReducer = (state = initialStateOfFoxReducer, action) => {

  switch(action.type){
    case "SET_FOXES_PLEASE":
      let theInfoFromComponent = action.payload
      return {
        ...state,
        foxes: theInfoFromComponent
      }
    default:
      return state
  }
}


// ----- User Reducer -----

let initialStateOfUserReducer = {
  username: "",
  token: "",
  pets: []
}


let userReducer = (state = initialStateOfUserReducer, action) => {
  switch (action.type) {

    case "SET_USER_INFO":
      console.log(action)
      return {
        ...state,
        pets: action.payload.user.pets,
        username: action.payload.user.username,
        token: action.payload.token
      }
    default:
      return state
  }
}





// combineReducers takes in a POJO
  // the keys of the POJO become the highest level keys of global state
  // the values of the POJO are the reducers

// Any time that an action gets dispatched, all the reducers handle it


let thePojo = {
  foxesInformation: foxReducer,
  infoAboutUser: userReducer
}

let rootReducer = combineReducers(thePojo)



let storeObj = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


