console.log("Javascript is cool!!!")
// CRUD IN TERMS OF HTML ELEMENTS:

// READ //
// QUERYSELECTOR - Will return the first element that it finds inside the HTML Object that it was called on (if not found, returns null)

    // #id
    // .className1.className2
    // h1#id.className

let theH1Object = document.querySelector("h1")





// CREATE //
// 1) Get a blank sheet of paper from the supply closet
let tacoLi = document.createElement("li")

// 2) Razzmatazz
    tacoLi.id = "tacoForGrandma"
    tacoLi.className = "good anotherOne"
    // tacoLi.className = "anotherOne"
    // tacoLi.classList.add("anotherClass", "anotherOne")

    tacoLi.innerText = "🌮"

// 3) Slap it on the DOM

let theEmojisUL = document.querySelector("ul#blobs")
    theEmojisUL.append(tacoLi)





// UPDATE //
    // 1) Find the element to update
        // let theH1Object = document.querySelector("h1")

    // 2) Razzmatazz
        theH1Object.innerText = "Here is a nice list, granny!"
        theH1Object.id = "grannysBoy"





// DELETE //
// parentElement.removeChild(childElement)

    // 1) Find the element to delete
        let firstBadLi = theEmojisUL.querySelector("li.bad")
 
    // 2) Remove it
        firstBadLi.remove()


let remainingBadEmojis = theEmojisUL.querySelectorAll("li.bad")
    // querySelectorAll gives us a NodeList
    // NodeList allows us to call forEach

remainingBadEmojis.forEach( function(badLi){
    badLi.remove()
} )

// IN RUBY:

// remainingBadEmojis.each do |badLi|
    // badLi.remove()
// end