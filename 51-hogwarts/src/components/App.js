import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Search from "./Search";
import PigPen from "./PigPen";

import hogs from "../porkers_data";



class App extends Component {

  state = {
    piggies: hogs,
    selectedCategory: "Greasy"
  }

  changeSelectedCategory = (chosenCategory) => {
    this.setState({
      selectedCategory: chosenCategory
    })
  }



  helperFunctionThatReturnsAnArray = () => {
    if(this.state.selectedCategory === "All"){
      return this.state.piggies

    } else if(this.state.selectedCategory === "Greasy"){
      return this.state.piggies.filter(pig => pig.greased)

    } else if(this.state.selectedCategory === "Clean"){
      return this.state.piggies.filter(pig => !pig.greased)

    } else if(this.state.selectedCategory === "Name"){
      let copyOfArray = [...this.state.piggies]
      copyOfArray.sort((pigA, pigB) => {
        return pigA.name.localeCompare(pigB.name)
      })
      return copyOfArray
      
    } else if(this.state.selectedCategory === "Weight"){
      let copyOfArray = [...this.state.piggies]
      copyOfArray.sort((pigA, pigB) => {
        return pigA.weight - pigB.weight
      })
      return copyOfArray
    }

  }



  render() {
    // Whenever you are invoking a function in `render`
      // You care about the return value of that function
    return (
      <div className="App">
        <Nav />
        <Search 
          selectedCategory={this.state.selectedCategory} 
          changeSelectedCategory={this.changeSelectedCategory}
        />
        <PigPen piggies={this.helperFunctionThatReturnsAnArray()}/>
      </div>
    );
  }
}

export default App;
