// STABLE ELEMENTS (ELEMENTS IN MY INDEX.HTML) GO AT THE TOP OF MY FILE
    // created elements should NOT go here
let tacoButton = document.querySelector("#taco")
let emojisUL = document.querySelector("ul#blobs")
let newEmojiForm = document.querySelector("#emoji-form")




tacoButton.addEventListener("click", function(evt){
    turnStringIntoEmojiLi("🌮")
})




// evt.target answers the question of which element receives the event
newEmojiForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let theFormElement = evt.target
    let userInput = theFormElement.chicken
    let whatUserTyped = userInput.value

    // let whatUserTyped = evt.target.chicken.value
    // let whatUserTyped = evt.target["new-emoji"].value

    
    // From a form, you can find the input using the input's name or ID
        // From the input, you can pull out the value
        
    turnStringIntoEmojiLi(whatUserTyped)
    
})




function turnStringIntoEmojiLi(emojiStr){
    // "" -> <li></li>
    let blankLi = document.createElement("li")
    blankLi.innerText = emojiStr
    
    emojisUL.append(blankLi)
    
    
    blankLi.addEventListener("click", function(e){
        // blankLi is accessible here because of closure
        blankLi.remove()
    })

}












// DELEGATION (OPTIONAL):
// 1) Find a stable element
// 2) Add an event listener
// 3) Add an if statement, checking for what the children have in common
// 4) Do whatever you want with evt.target


// emojisUL.addEventListener("click", function(evt){
//     if(evt.target.tagName === "LI"){
//         // evt.target is for sure an LI
//         evt.target.remove()
//     }
// })