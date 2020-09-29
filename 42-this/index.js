let redButton = new ButtonJS("red")
let cyanButton = new ButtonJS("cyan")
let firebrickButton = new ButtonJS("firebrick")































// https://twitter.com/dan_abramov/status/790858537513656320   

// Regular (baseless) functions, AKA functions with the keyword function get their value of `this` from the execution context
  // The value of `this` is dependent on how the function is executed

// Arrow functions get their `this` from where they are defined


// Bind is a method that can be called on a function definition that will return a function definition with `this` changed
// Call is a method that can be called on a function definition that will invoke the function with `this` changed
// Apply is a method that can be called on a function definition that will invoke the function with `this` changeds

function globalIntroduction(){
  console.log("THIS IS THIS:", this)
  return `Hello, I am ${this.djName}`
}

const annie = {
  djName: "BIGFISHH",
  name: "Annie",
  introduce: globalIntroduction
}

const isabel = {
  djName: "Klee",
  name: "Isabel",
  introduce: annie.introduce
}

const sylwia = {
  djName: "DJ Pierogi",
  name: "Sylwia Vargas",
  introduce: isabel.introduce
}

const eric = {
  djName: "Grandmaster Slamma Jamma",
  name: "Eric",
  introduce: sylwia.introduce
}
  


// Snippet 1:
eric.introduce()
  // this -> eric {}
  //  -> "Hi, I'm Grandmaster Slamma Jamma"





// Snippet 2:
  let functionName = eric.introduce
  functionName()
  // this -> window
  // -> "Hi, I'm undefined" 
    












// WHAT IS THE VALUE OF THIS?

document.querySelector("h1").addEventListener("click", function(evt){
  // console.log(this)

    // this -> <h1></h1>
    // this -> evt.currentTarget
      // WHat HTML element is calling addEventListener
      // currentTarget answers the question of who has the event listener
})



let arr = [1, 4, 3, 4]
arr.forEach(function(element, index, originalArray) {
  // console.log(this)
    // this -> window 
})







fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this)
    // this -> window
})





















