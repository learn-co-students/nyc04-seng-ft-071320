// Fetch always return a Promise with a Response object inside of it
let dogButton = document.querySelector("button#hello-button")
let dogsUl = document.querySelector("#dogs")



// element.addEventListener("EVENT_TYPE", () => {
  // GRAB SOME VARIABLES

  // fetch("URL", {
  // })
    // .then(res => res.json())
    // .then(() => {
      // DOM MANIPULATION HERE
    // })

// })



dogButton.addEventListener("click", (evt) => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((dogObj) => {

      let dogLi = document.createElement("li")
      let dogImg = document.createElement("img")
        dogImg.src = dogObj.message
     
      dogLi.append(dogImg)
      dogsUl.append(dogLi)  

    })
    // .catch((err) => {
    //   console.log(err)
    // })



})












function thisIsARegularFunction(arg1){
  console.log("hello");
}


// Arrow functions can implicitly return if there's no block in the body of the method

const thisIsArrowFunction = (arg1, arg2) => {
  console.log("hello")
}

const boringFuncImplicitlyReturningChicken = () => "chicken"



// arr.forEach((element)=> {
  // DO SOMETHING WITH ELEMENT
// })