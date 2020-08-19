# require 'pry'

# Strings - Text

str = "This is a string"
str2 = 'This is also another string'
fresh_prince = "This is a story all about how my life flipped turned upside down"
nonsense = "#{str} hello #{fresh_prince}"

# ***********************************************************************

# Symbols - Symbols are cheaper in memory

puts "SYMBOL: ------"
puts :hello.object_id
puts :hello.object_id

puts "STRING: ------"
puts "hello".object_id
puts "hello".object_id

# ***********************************************************************

# Booleans

true
false

# ***********************************************************************

# Numbers
int1 = 5
floatNum = 2.0


# ***********************************************************************

# Methods / Objects

# Defining
def say_hi_five_times
    5.times do
        puts "Hello"
    end    
end

def say_hi_n_times(num_from_user)
    num_from_user.times do
        p "Hello"
    end   
    "Abc"
end

# RETURN VALUE:
# Ruby's implicit return only looks at the line above the final `end`
# puts is not the same as return


# SCOPE:
# Variables declared outside of a method will not be readily available inside the method
# From outside a method, the variables in the definition will not be available



# Executing - When executing Ruby methods, parentheses are optional
# say_hi_n_times 3 
# The line above will work


thisIsTheReturnValue = say_hi_n_times(2)
puts thisIsTheReturnValue

variableBelow65 = "Hello, this is a variable"



# ***********************************************************************


# Arrays - Lists 
arrOfLetters = []
arrOfLetters.push("a","b")
# push adds the elments to the end of the array
arrOfLetters << "c" << "d"
arrOfLetters << ["e","f"]

# pop - removes the element from the end of the array
# shift - removes the element from the beginning of the array
# unshift - Adds an element to the beginning of an array
# flatten - Frees an array inside an array
# [[2,[3]], 5, 6] => [2,3,5,6]

# Index begins at 0 




# Hashes - Key-value pairs
hashWithStrings = {
    "age" => 23, 
    "name" => "Alexander Hamilton", 
    "things he did" => ["A lot"]
}

# hashWithStrings["age"] => 23
# 

hashWithSymbols = {
    age: 14,
    name: "Aaron Burr",
}

# hashWithSymbols[:age] => 14

hashWithSymbols2 = {
    :lives => {
        country: "USA",
        state: "Virginia"
    },
    :federalist => false
}

# hashWithSymbols[:lives] => "In Virginia"

binding.pry