let foodsOL = document.querySelector(".ui.massive.list")
let foodForm = document.querySelector("form#new-food.fluid")



foodForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let nameOfFood = evt.target.food_name.value

    // SPECIFICALLY FOR JSON-SERVER, KEYS OF YOUR BODY WILL BE SAVED TO THE DATABASE IMMEDIATELY

    fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameOfFood,
            count: 1
        })
    })
        .then(res => res.json())
        .then((createdFoodObj) => {
            turnFoodObjToLi(createdFoodObj);
            evt.target.reset()
        })


})






fetch("http://localhost:3000/foods")
    .then(res => res.json())
    .then((foodsArr) => {
        // foodsArr -> [{}, {}, {}]
        foodsArr.forEach((foodObj) => {
           turnFoodObjToLi(foodObj);
        })

    })






// {} -> <li></li> 
let turnFoodObjToLi = (food) => {
    // 1) Manually create the outermost element
    let foodLi = document.createElement("li")
        foodLi.className = "item"
    
    // 2) Fill the contents of that element
        // Create the individual elements, razzmatazz (innertext) and append accordingly
            // OR
        // Use innerHTML to make your life easier

    foodLi.innerHTML = `<p class="js-food middle aligned content">${food.name} - <span>${food.count}</span></p>
        <button class="increase">Increment</button>
        <button class="delete-button">X</button>
    `

    // 3) Slap the outermost element on the DOM
    foodsOL.append(foodLi)

    // 4) Grab elements out of the outermost element (step 1)
    let theDeleteButton = foodLi.querySelector("button.delete-button")
    let increaseButton = foodLi.querySelector(".increase")
    let countSpan = foodLi.querySelector("span")

    // 5) Add the event listeners on the appropriate elementss

    theDeleteButton.addEventListener("click", (evt) => {

        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((emptyObject) => {
                // emptyObject -> {}
                foodLi.remove()
            })

    })



    increaseButton.addEventListener("click", (evt) => {
        console.log("HERE IS THE FOOD IN MEMORY:",food);

        let theNewNumber = food.count + 1

        // UPDATING THE BACKEND
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                count: theNewNumber
            })
        })
            .then(res => res.json())
            .then((updatedFoodObj) => {
                console.log("UPDATED OBJECT", updatedFoodObj);
                
                // UPDATING THE OBJ IN MEMORY BELOW
                food.count = updatedFoodObj.count
                console.log("AFTER THE FOOD HAS BEEN UPDATED", food);


                // UPDATING THE DOM BELOW
                countSpan.innerText = updatedFoodObj.count
            })

    })





}




