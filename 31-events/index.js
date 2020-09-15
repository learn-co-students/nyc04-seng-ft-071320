// EVENTS:
    // 1) Find the appropriate element
    // 2) Attach an event listener on that element
    // 3) Tell the element/code what to do once that event occurs

    
    // GENERIC WAY OF WRITING EVENT LISTENERS:

    // ELEMENT.addEventListener("EVENT_TYPE", function CALLBACK(){
        // CODE IN THE BODY OF THE CALLBACK
    // })


    // Once EVENT_TYPE has occured on the ELEMENT, execute the CALLBACK


// STABLE ELEMENTS (ELEMENTS IN MY INDEX.HTML) GO AT THE TOP OF MY FILE
    // createElements should NOT go here

// 1
let tacoButton = document.querySelector("#taco")
let emojisUL = document.querySelector("ul#blobs")
let newEmojiForm = document.querySelector("#emoji-form")


// 2 && 3
tacoButton.addEventListener("click", function(anotherEvt){
    let tacoLi = document.createElement("li")
    tacoLi.innerText = "🌮"
    emojisUL.append(tacoLi)
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
        // From the input, call .value
        
    let blankLi = document.createElement("li")
    blankLi.innerText = whatUserTyped
    emojisUL.append(blankLi)
    
})