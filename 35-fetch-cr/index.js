// document.addEventListener("DOMContentLoaded", (evt) => {
    // INSIDE THE CALLBACK, YOU'RE GUARANTEED THAT THE PAGE HAS LOADED
// })
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
        <button>Increment</button>
        <button class="delete-button">X</button>
    `
    

    // 3) Slap the outermost element on the DOM
    foodsOL.append(foodLi)
    // 4)
    // 5)
}


