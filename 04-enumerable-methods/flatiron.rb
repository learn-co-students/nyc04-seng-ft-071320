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
            pets: 3
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

brooklyn << {}
brooklyn[-1][:cohort_date] = 71320
brooklyn[-1][:name] = "NYC-04-SENG-FT-071320"
brooklyn[-1][:coaches] = []
brooklyn[-1][:coaches] << {name: "Isabel L", foods: []}
brooklyn[-1][:coaches] << {name: "Annie Z", foods: []}
brooklyn[-1][:coaches][0][:foods] << "Mozzarella Cheese"
brooklyn[-1][:coaches][1][:foods] << "Bubble Tea"
brooklyn[-1][:lead] = {}
brooklyn[-1][:lead][:name] = "Eric K"
brooklyn[-1][:lead][:pets] = 0
brooklyn[-1][:lead][:pets] += 1





# ENUMERABLE METHODS (Mostly arrays)

# EACH - 

# Print out each cohort name and their lead instructor

# Add "Signe" to each of the cohort under the SEM key





# SELECT - 

# Select all the cohorts that started after 50120

# Select all the cohorts whose name contains the string "SENG"





# FIND - 

# Find the cohort whose name is "French Pry with Gitchup" 

# Find the cohort whose lead has only 1 pet and is teaching a cohort after 501020





# MAP - 

# Transform the list of all the coaches to their cohort name 

# Transform the list of all the cohorts to their lead instructor's name 




# NESTED

# Print out each of the coaches name to the terminal

# Find the cohort where Jack is one of the coaches

# Transform the list of all the cohorts to their coaches names (array of strings)





# MAX_BY / MIN_BY - 

# Find the cohort who started the earliest

# Find the cohort whose lead has the most number of pets






binding.pry
0