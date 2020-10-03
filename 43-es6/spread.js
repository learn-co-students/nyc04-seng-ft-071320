// What is the spread operator and why would I want to use it?
// Importance in Mod 4: 🔥🔥🔥🔥🔥

  const pandemicEric = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    showering: false,
    eating: ["junk", "garbage"]
  }

  const regularStandardsOfLiving = {
    showering: true,
    eating: ["healthy", "clean"]
  }

  const newEric = {
    ...pandemicEric,
    exercising: false,
    ...regularStandardsOfLiving,
  }

  console.log(newEric);





// Could I do it to an array?
// Importance in Mod 4: 🔥🔥🔥🔥🔥

const bodyParts = ["head", "shoulders", "knees", "toes"];

const song = [...bodyParts, ...bodyParts, "knees", "toes"]


// APPLICATION: Whenever you update state, chances are spread is around the corner
  
// Could I do it to the parameters of a function?
// Importance in Mod 4: 🔥

  function canTakeFourArguments(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4)
  }

  canTakeFourArguments(...bodyParts)