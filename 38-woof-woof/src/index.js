const dogBarDiv = document.querySelector("div#dog-bar")
const mainInfoDiv = document.querySelector("div#dog-info")
// Stable elements should have event listeners added on the global

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
    let dogImage = document.createElement("img")
        dogImage.src = dog.image

    let nameH2 = document.createElement("h2")
        nameH2.innerText = dog.name

    let dogButton = document.createElement("button")
        dogButton.innerText = dog.isGoodDog ? "Make into RFI Dog" : "Every Dog is Good Dog"
        // if(dog.isGoodDog){
        //     dogButton.innerText = "Make into RFI Dog"
        // } else {
        //     dogButton.innerText = "Every Dog is Good Dog"
        // }

    mainInfoDiv.innerHTML = ""
    // while(mainInfoDiv.lastChild){
    //     mainInfoDiv.lastChild.remove()
    // }

    mainInfoDiv.append(dogImage, nameH2, dogButton)




    dogButton.addEventListener("click", (evt) => {
        let whatBooleanItShouldBecome = !dog.isGoodDog

        fetch(`http://localhost:3000/pups/${dog.id}`, {
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
            dog.isGoodDog = updatedDog.isGoodDog
        })



    })





}

