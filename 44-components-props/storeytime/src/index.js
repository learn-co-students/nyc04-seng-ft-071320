// Requiring specific classes/object from packages
  // Ruby 'require'
import React from 'react';
import ReactDOM from 'react-dom';

// Importing things from other files
import './index.css';
import App from './App';



let h1Object = <h1 id="chicken">Hello <span>World</span></h1>
// let secondh1Object = React.createElement("h1", {id: "chicken"}, "Hello World!!!!")
// console.log(h1Object)

ReactDOM.render( < App /> , document.getElementById('root'));


