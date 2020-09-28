// DEFINING A CLASS:
  // The `class` keyword makes creating the class's Prototype easier

// FOR REACT: 
  // Use arrow functions inside classes (90%)

class Person {
  constructor(){
    console.log("hello");
  }

  say_hello = () => {
    return "hello"
  }
}





class Instructor extends Person{

  
  constructor(first_argument, second_argument){
    // Constructor is tied with `new`
    super()
    // `this` inside of the constructor is the instance being created
    this.name = first_argument
    this.full_name = second_argument
    
  }
  
  // Defining an instance method
  
  introduce(){
    // Inside of an instance method, it would be great if `this` were the instance
    return `Hi, I am ${this.name}!!!`
  }
  
  
  // Defining an instance method (part 2)
  eat = () => {
    return `${this.name} is eating.`
  }

  
  static all = []
  
  static classMethod(){
    
  }

}


// CREATING AN INSTANCE:
  // When we use the `new` keyword, the class's Prototype becomes the object's __proto__

const eric = new Instructor("Eric", "Eric Kim")
const annie = new Instructor("Annie", "Annie Zheng")
const isabel = new Instructor("Isabel", "Isabel Lee")









// Problems with using POJOs:
  // 1) Lack of consistency with the key-value pairs
  // 2) Memory efficiency and inconsistency
 

// `this` inside of a POJO represents the POJO (sorta)

// Javascript's ===:
  // Pass by value (Primitive)
  
  // Pass by reference (Object (POJO, instance of a class, array, function definition))
    // Do these objects have the same place in memory
    // Are they the EXACT same object



function globalIntroduction(){
  return `Hi, I am ${this.name}!!!`
}



const annieObj = {
  fullName: "Annie Zheng",
  name: "Annie",
  introduce: globalIntroduction
}

const isabelObj = {
  fullName: "Isabel Lee",
  name: "Isabel",
  introduce: globalIntroduction
}

const ericObj = {
  djName: "Grandmaster Slamma Jamma",
  name: "Eric",
  introduce: globalIntroduction
}

// FUNCTION DEFINITION
// console.log(ericObj.introduce)
// console.log(ericObj.introduce())
// console.log(ericObj.introduce() === isabelObj.introduce())
// console.log(ericObj.introduce === isabelObj.introduce)


