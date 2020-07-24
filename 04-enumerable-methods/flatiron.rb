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
# Returns the array you're iterating over
# Block Parameter - Single element of the array
# Body of the block - Whatever you want to do for each element

# Print out each cohort name and their lead instructor

returnvalue = brooklyn.each do |cohort_hash|
    puts "********************"
    puts cohort_hash[:cohort_date]
    puts cohort_hash[:name]
    puts "Is taught by #{cohort_hash[:lead][:name]}"
    puts "********************"
end

# Add "Signe" to each of the cohort under the SEM key

brooklyn.each do |cohort_hash|
    cohort_hash[:sem] = "Signe K"
end



# SELECT - 
# Returns a sub-array of same elements satisfying a condition (Preserves data type)
# Block Parameter - Single element of the array
# Body of the block - The last value should be a boolean
    # Ruby uses this boolean to decide which elements to keep
# No conditions met - []

# Select all the cohorts that started after 50120

after_050120 = brooklyn.select do |cohort_hash|
    cohort_hash[:cohort_date] > 50120
end

# Select all the cohorts whose name contains the string "SENG"

seng_cohorts = brooklyn.select do |cohort_hash|
    cohort_hash[:name].include?("SENG")
end



# FIND - 
# Returns the first element satisfying a condition (Preserves data type)
# Block Parameter - Single element of the array
# Body of the block - The last value should be a boolean
    # Ruby uses this boolean to decide which singular element to keep
# No conditions met - Returns nil


# Find the cohort whose name is "French Pry with Gitchup" 
french_pry = brooklyn.find do |cohort_hash|
    cohort_hash[:name] == "French Pry with Gitchup"
end

# Find the cohort whose lead has only 1 pet and is teaching a cohort after 501020

prynatas = brooklyn.find do |cohort_hash|
    hasOnePet = cohort_hash[:lead][:pets] == 1
    startedAfter050120 = cohort_hash[:cohort_date] > 50120
    startedAfter050120 && hasOnePet 
    # cohort_hash[:lead][:pets] == 1 && cohort_hash[:cohort_date] > 50120
end





# MAP - 
# Returns an array of the same size with the data inside "transformed"
# Block Parameter - Single element of the array
# Body of the block - The last value should be how you want to transform the data
    # Ruby uses this last line to shovel into a new array



# Transform the list of all the cohorts to their cohort name 

cohort_names = brooklyn.map do |cohort_hash|
    cohort_hash[:name]
end

# Transform the list of all the cohorts to their lead instructor's name 

lead_instructors = brooklyn.map do |cohort_hash|
    cohort_hash[:lead][:name]
end



# NESTED

# Print out each of the coaches name to the terminal

brooklyn.each do |cohort_hash|
    cohort_hash[:coaches].each do |coach_hash|
        puts coach_hash[:name]
    end
end

# Find the cohort where Jack is one of the coaches

cohort_with_jack = brooklyn.find do |cohort_hash|

    jack_or_nil = cohort_hash[:coaches].find do |coach_hash|
        coach_hash[:name] == "Jack H"
    end

    jack_or_nil
end

# Transform the list of all the cohorts to their coaches names (array of strings)


# Enumerable Methods for Hashes
# Select - Returns a hash
# Find - Returns an array
# Map - Returns an array


# Block parameters - |key, value| 




# MAX_BY / MIN_BY - 

# Find the cohort who started the earliest

# Find the cohort whose lead has the most number of pets






binding.pry
0