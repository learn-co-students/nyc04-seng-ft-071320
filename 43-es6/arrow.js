// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?
    // Single lined and no curlies
    // Wrapping a single lined arrow function in () makes it implicitly return

let functionReturning3 = () => (3)
let functionReturningObject = () => ({hello: "Eric"})


// Importance in Mod 4: 🔥🔥🔥🔥🔥



let arrayOfNumbers = [100, 23, 41, 192, 231]
let arrayOfStrings = ["zebra", "aardvark", "penguin", "chicken", "beef"]
let arrayOfObjs = [{name: "zebra"}, {name: "aardvark"}, {name: "penguin"}]


// ******* MAP

// Transforms an array
    // Does not mutate the original array
    // Callback should return the transformation

// let doubledNumbers = arrayOfNumbers.map((number) => {
//     return number * 2
// })

// [{}, {}, {}] -> [<>, <>, <>]
let doubledNumbers = arrayOfNumbers.map(num => num * 2)

// *******




// ******* FILTER

    // Returns a subarray satisfying a condition
        // Does not mutate the original array
        // Callback should return a boolean

let arrayOfBigNumbers = arrayOfNumbers.filter(num => num > 50)

// *******






// ******* SORT

    // Mutates the original array
        // Callback should return a positive/negative number

    let copiedNumber = [...arrayOfNumbers]

    copiedNumber.sort((num1, num2) => {
        return num1 - num2
    })


    let copiedString = [...arrayOfStrings]

    copiedString.sort((animal1, animal2) => {
        return animal1.localeCompare(animal2)
    })

    let copiedObjs = [...arrayOfObjs]

    copiedObjs.sort((animalA, animalB) => {
        return animalA.name.localeCompare(animalB.name)
    })

// *******
