const dogBarDiv = document.querySelector("div#dog-bar")
const mainInfoDiv = document.querySelector("div#dog-info")

const dogImage = mainInfoDiv.querySelector("img")
const dogButton = mainInfoDiv.querySelector("button")
const nameH2 = mainInfoDiv.querySelector("h2")
// Stable elements should have event listeners added on the global

let globalDog = {}




fetch("http://localhost:3000/pups")
    .then(res => res.json())
    .then((pupsArray) => {
        pupsArray.forEach((singularPup) => {
            turnSingularPupToSpan(singularPup)
        })
        renderMainDog(pupsArray[0])
    })


    

// {} -> <span></span>
// Unstable elements should have event listeners in the same place as their creation
let turnSingularPupToSpan = (dog) => {

    let dogSpan = document.createElement("span")
        dogSpan.innerText = dog.name

    dogBarDiv.append(dogSpan)

    dogSpan.addEventListener("click", (evt) => {
        renderMainDog(dog)
    })

}



// {} -> <h2><img/><button>
const renderMainDog = (dog) => {
    globalDog = dog
    dogButton.innerText = dog.isGoodDog ? "Make into RFI Dog" : "Every Dog is Good Dog"
    nameH2.innerText = dog.name
    dogImage.src = dog.image
}


dogButton.addEventListener("click", (evt) => {
    let whatBooleanItShouldBecome = !globalDog.isGoodDog

    fetch(`http://localhost:3000/pups/${globalDog.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            isGoodDog: whatBooleanItShouldBecome
        })
    })
    .then(res => res.json())
    .then((updatedDog) => {
        // MANIPULATING THE DOM
        dogButton.innerText = updatedDog.isGoodDog ? "Make into RFI Dog" : "Every Dog is Good Dog"

        // UPDATE THE POJO IN MEMORY
        globalDog.isGoodDog = updatedDog.isGoodDog
    })



})
