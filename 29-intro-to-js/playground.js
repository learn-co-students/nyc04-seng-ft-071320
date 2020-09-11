// Begin variable declaration with let, const, var

// var is function-scoped
// let && const are block-scoped: {}

// const is non-assignable
// let can be reassigned

let arr = [10,9,8,7,6]



function isItEven(num){

    const thingyToReturn = "chicken"
    console.log(num)
    if(num % 2 === 0){
        console.log("It is even.")
    } else {
        console.log("It is not even.")
    }

    return thingyToReturn

}


// isItEven(2)

// EXECUTING THE FUNCTION WITH PROPER ARGUMENTS



// isItEven()

// Too Few Arguments: Tries to execute the function with `undefined`
// Too Many Arguments: Javascript will ignore the extraneous arguments



// isItEven  

// Refers to the definition of the function




// the invocation of forEach takes in a function definition (isItEven)
// isItEven is the callback for the forEach

// callback functions are function DEFINITIONS (isItEven) being passed into a function INVOCATION (forEach)

// callback functions are at the mercy of the function receiving it (arguments of a callback is determined by the function receiving the callback)



// arr.forEach(isItEven)


// ANOTHER WAY:

arr.forEach( function(element, idx){
    console.log("ELEMENT:", element)
    console.log("INDEX:", idx)
    // console.log("ORIGINAL", originalArray)
} )












// f(x) = 2x + 4

// INVOCATION BELOW
// f(5) = 2(5) + 4 = 14

// DEFINITION BELOW
// f(x) is the definition
// f(x) + 6 = (2x + 4) + 6 = 2x + 10