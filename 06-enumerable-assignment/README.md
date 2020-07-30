# Enumerable Assignment

Ruby has a lot of higher-level enumerable methods outside of `each`. While `each` is general enough to be used in a lot of scenarios, for this lab, you are expected to build out every deliverable without using `each`. 

In other words: All the deliverables that are expected of you are possible to be solved with just the higher-level enumerable methods available in Ruby.


## Setup 

Right now, the `instructors` method returns an array of hashes. Your job is to iterate on this array and build out body of each of the methods written in `run.rb`.
Here is what each of the method should do: 

- `all_names` should return an array of all the instructors' names:
    - `
        [
            "Annie Z", 
            "Sylwia V", 
            "Isabel L", 
            "Eric K"
        ]
    `

- `name_and_role` should return an array of hashes, structured the following way:
    - `
        [
            {"Annie Z" => "Coach"},
            {"Sylwia V" => "Lead"},
            {"Isabel L" => "Coach"},
            {"Eric K" => "Lead"}
        ] 
    `

- `all_coaches` should return an array of all the coaches:
    - `
        [
            {
                name: "Annie Z",
                role: "Coach",
                siblings: 2,
                owns_car: false
            },
            {
                name: "Isabel L",
                role: "Coach",
                siblings: 0,
                owns_car: true
            }
         ]
    `

- `all_leads` should return an array of all the leads: 
    - `
        [
            {
                name: "Sylwia V",
                role: "Lead",
                siblings: 1,
                owns_car: true
            },
            {
                name: "Eric K",
                role: "Lead",
                siblings: 4,
                owns_car: false
            }
        ]
    `

- `first_instructor_with_a_car` should return the first instructor that owns a car:
    - `
        {
            name: "Sylwia V",
            role: "Lead",
            siblings: 1,
            owns_car: true
        }
    `

- `instructors_with_more_than_1_sibling` should return an array of instructors with more than 1 sibling
    - `
        [
            {
                name: "Annie Z",
                role: "Coach",
                siblings: 2,
                owns_car: false
            },
            {
                name: "Eric K",
                role: "Lead",
                siblings: 4,
                owns_car: false
            }
        ]
    `

- `most_siblings` should return an instructor who has the highest number of siblings:
    -`
        {
            name: "Eric K",
            role: "Lead",
            siblings: 4,
            owns_car: false
        }
    `

- `total_siblings` should return a number that is the sum of all the siblings that the instructors have:
    - `
        7
    `

