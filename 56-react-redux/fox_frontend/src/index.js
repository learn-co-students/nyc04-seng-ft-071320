import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ROUTING STUFF HERE
import {BrowserRouter} from 'react-router-dom'

// REDUX STUFF HERE
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// Below is a reducer (func. definition)
  // The return value of our reducer BECOMES our global state

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

let storeObj = createStore(
  foxReducer,  
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


