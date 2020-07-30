require 'pry'

def instructors
    [
        {
            name: "Annie Z",
            role: "Coach",
            siblings: 2,
            owns_car: false
        },
        {
            name: "Sylwia V",
            role: "Lead",
            siblings: 1,
            owns_car: true
        },
        {
            name: "Isabel L",
            role: "Coach",
            siblings: 0,
            owns_car: true
        },
        {
            name: "Eric K",
            role: "Lead",
            siblings: 4,
            owns_car: false
        }
    ]
end



def all_names
    instructors.map do |instructor_hash|
        instructor_hash[:name]
    end
    # map takes an array of stuff
    # map uses the last line of block and << into a new array
    # map returns the new array
end


def name_and_role
    instructors.map do |instructor_hash|
        {instructor_hash[:name] => instructor_hash[:role]}
    end
end



def all_coaches
    instructors.select do |instructor_hash|
        instructor_hash[:role] == "Coach"
    end

    # instructors.select {|instructor_hash| instructor_hash[:role] == "Coach" }

    # select takes an array of stuff
    # select uses the last line of block (condition) to decide whether we want to << into a new array
    # select returns the new array
end



def all_leads
    instructors.select do |instructor_hash|
        instructor_hash[:role] == "Lead"
    end
end



def first_instructor_with_a_car
    instructors.find do |instructor_hash|
        instructor_hash[:owns_car] == true
        # instructor_hash[:owns_car]
    end

    # find takes an array of stuff
    # select uses the last line of block (condition) to decide whether we want to return that element
    # select returns the first element

end



def instructors_with_more_than_1_sibling
    sub_instructors = instructors.select do |instructor_hash|
        instructor_hash[:siblings] > 1
    end
    sub_instructors
end



def most_siblings
    instructors.max_by do |instructor_hash|
        instructor_hash[:siblings]
    end
    # max_by takes an array of stuff
    # max_by uses the last line of block (number) and returns the element with the highest number
    # returns an element
end



def total_siblings
    instructors.sum do |instructor_hash|
        instructor_hash[:siblings]
    end
end



array_of_all_names = all_names()
array_of_name_and_role = name_and_role()
array_of_coaches = all_coaches()

sylwia = first_instructor_with_a_car()
annie_eric = instructors_with_more_than_1_sibling()
eric = most_siblings()

binding.pry
0