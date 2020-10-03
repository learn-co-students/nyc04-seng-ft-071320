// What is destructuring and why would I want to do it?
  // POJO -> Variable
  // Importance in Mod 4: 🔥🔥🔥🔥

  const mod3 = {
    name: "Code Benders",
    population: 25,
    founded: 71320,
    languages_mastered: ["Ruby", "Rails", "Javascript"],
  }
  // const {key1, key2} = object

  // const name = mod3.name;
  // const population = mod3.population;
  // const founded = mod3.founded;

  // let {name, founded, population} = mod3

  // const languages = mod3.languages_mastered
  let {languages_mastered: languages, name, founded} = mod3


  // APPLICATION:
    // let {name, age, image} = this.props.object




// Could I do it to an array?

// Importance in Mod 4: 🔥

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, manhattanVar, , queensVar] = boroughNames

  // Application: React Hooks
    // let [setCounter, counter] = useState(0)












// Could I do it to the parameters of a function?
  // If a function takes in an object, you can destructure it in the params
// Importance in Mod 4: 🔥🔥

  function greet({name, djName}) {

    // const name = person.name;
    // const djName = person.djName;
    
    // const {name, djName} = person

    return `Hello, ${ name }! Your DJ name is ${ djName }.`
  }

  const me = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    middleName: "Hank"
  }

  console.log(greet(me));

  // Application: Functional Components
    // function TestComponent({}){
    // }


