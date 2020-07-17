# Strings - Text
str = "This is a string"
str2 = 'This is also another string'

fresh_prince = "This is a story all about how my life flipped turned upside down"

nonsense = "#{str} hello #{fresh_prince}"
# String interpolation in Ruby uses "" and #{}



# ***********************************************************************



# Symbols - Symbols are cheaper in memory
# Behaves sorta like a string

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
puts "'ABC's truthy value is: "
puts !!"abc"
# Double bang operator returns a boolean based on truthiness

trueVar = true || false || !!"abc" || !false
# OR operator - At least one condition is true
falseVar = true && false 
# AND operator - All conditions must be true

# nil is falsey

if nil #condition1
    puts "This will be shown if the condition1 above is true"
elsif "another condition" #condition2
    puts "This will be shown if the condition2 above is true"
else
    puts "This will be shown if none of the conditions above are met"
end



# ***********************************************************************



# Numbers
int1 = 5
float = 2.0
# .to_f, .to_i 

# integer divided by integer will be an integer (always rounded down)
# float divided by integer will be float
# integer divided by float will be float
# float divided by float will be float



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

# Ruby's implicit return only looks at the line above the final `end`
# puts is not the same as return

# Executing - When executing Ruby methods, parentheses are optional
# say_hi_n_times 3 
# The line above will work


thisIsTheReturnValue = say_hi_n_times(2)
puts thisIsTheReturnValue



# ***********************************************************************




# Arrays

# Hashes
