require 'pry'

brooklyn = [
    {
        cohort_date: 42020,
        name: "French Pry with Gitchup",
        coaches: [
            {
                name: "Rei R",
                foods: ["Durr Burger"]
            },
            {
                name: "Jack H",
                foods: ["Trader Joes Ice Cream"]
            }
        ],
        lead: {
            name: "Ian H",
            pets: 2
        }
    },

    {
        cohort_date: 60120,
        name: "Pryñatas",
        coaches: [
            {
                name: "Ethan F",
                foods: ["Sushi"]
            },
            {
                name: "Otha H",
                foods: ["Cheese"]
            }
        ],
        lead: {
            name: "Michelle R",
            pets: 1
        }
    }
]
# NOTES
# brooklyn.class -> `class` gives us what data type we're working with
# brooklyn.methods -> `methods` gives us what methods are available for that object

# brooklyn => [{},{}]

# DELIVERABLES





# Add one more cohort: {}

brooklyn << {}
# brooklyn.push({})





# Add the cohort_date, name, coaches, lead 
#     cohort_date: 71320,
#     name: "NYC-04-SENG-FT-071320",
#     coaches: [],
#     lead: {}

# ourCohortHash = brooklyn[-1]
# ourCohortHash[:cohort_date] = 71320

brooklyn[-1][:cohort_date] = 71320
brooklyn[-1][:name] = "NYC-04-SENG-FT-071320"
brooklyn[-1][:coaches] = []
brooklyn[-1][:lead] = {}





# Add Annie && Isabel to the coaches

brooklyn[-1][:coaches] << {name: "Isabel L", foods: []}
brooklyn[-1][:coaches] << {name: "Annie Z", foods: []}





# Add Mozzarella Cheese to Isabel's list of foods
# Add Bubble Tea to Annie's list of foods
brooklyn[-1][:coaches][0][:foods] << "Mozzarella Cheese"
brooklyn[-1][:coaches][1][:foods] << "Bubble Tea"





# Add Eric as the lead
brooklyn[-1][:lead][:name] = "Eric K"





# Add pets as 0
brooklyn[-1][:lead][:pets] = 0
# Increment the number of pets
brooklyn[-1][:lead][:pets] += 1





# ENUMERABLE METHODS
# Print out each cohort name and their lead instructor

# If it hits nil, the loop continues
# If it errors out, the loop stops
brooklyn.each do |cohortHash|
    # cohortHash represents a single element inside the brooklyn array
    # In the block (do ... end), write what you want to do to EACH of the element inside the Brooklyn array
    puts cohortHash[:name]
    puts "Is being taught by #{cohortHash[:lead][:name]}"
end



binding.pry
0