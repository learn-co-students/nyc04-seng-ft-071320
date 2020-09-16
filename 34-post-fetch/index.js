// Whenever you add an event listener on a stable element
// Make sure you are not doing it inside of another event listener

let foxButton = document.querySelector('#hello-button')
let foxesUl = document.querySelector("ul#foxes")
let foxForm = document.querySelector("form#fox-form")


// element.addEventListener("EVENT_TYPE", () => {
  // GRAB SOME VARIABLES

  // fetch("URL", {
  // })
    // .then(res => res.json())
    // .then(() => {
      // DOM MANIPULATION HERE
    // })
    
// })
    
    
    
foxForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let theNameThatTheUserInput = evt.target.fox_name.value
  let theImageThatTheUserWants = evt.target.f_img.value

  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name: theNameThatTheUserInput,
      img_url: theImageThatTheUserWants,
    })
  })
    .then(res => res.json())
    .then((createdFox) => {
      turnFoxObjToLi(createdFox);
    })

  // the keys of your body enters Rails params



})
    
    







foxButton.addEventListener("click", (evt) => {


    fetch("http://localhost:3000/foxes/random")
      .then(res => res.json())
      .then((singleFoxObj) => {

        console.log(singleFoxObj)
        turnFoxObjToLi(singleFoxObj)

      })
    

})








// Whenever you add an unstable element to the page,
// Have a helper function for that:
  // {id: 1, name: "foxy", img_url: "fox image here"} -> <li></li>
  
let turnFoxObjToLi = (foxPOJO) => {
  let foxLi = document.createElement("li")
  let foxImg = document.createElement("img")

  foxImg.src = foxPOJO.img_url
  foxImg.alt = foxPOJO.name

  foxLi.append(foxImg)
  foxesUl.append(foxLi)

  foxLi.addEventListener("click", (evt) => {
    console.log(foxPOJO);
    foxLi.remove()
  })

}
  
