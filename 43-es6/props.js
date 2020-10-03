// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

  // Variables -> POJO
// Importance in Mod 4: 🔥🔥

const name = "Eric Kim"
let age = 11
const eating = ["junk", "garbage"]

// const eric = {
//   name: name,
//   age: age,
//   eating: eating
// }

  // const object = {key1, key2}


const eric = { name, age, eating }

// Application:
  // JSON.stringify({name, age, eating})
  // this.setState({})






// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

// Importance in Mod 4: 🔥🔥🔥

  const whatIwantToDoMore = "sing";

  const newYearsResolution = {
    goal: "Write code every day",
    [whatIwantToDoMore]: "more"
  }

  newYearsResolution.whatIwantToDoMore
    // -> undefined

  newYearsResolution[whatIwantToDoMore]
    // -> "more"

// console.log(newYearsResolution);

// APPLICATION: Controlled Components
  // this.setState({
  //   [evt.target.name]: evt.target.value
  // })