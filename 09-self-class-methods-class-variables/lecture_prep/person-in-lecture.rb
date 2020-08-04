# Write a Person class.
require 'pry'

class Person

    # The person should be instantiated with these attributes: hunger_time, last_hunger_change, name, hunger_level (10 -> the highest one). Only name will remain unchanged in this example.

    #attr_accessor = attr_reader + attr_writer
    attr_accessor :hunger_time, :last_hunger_change, :hunger_level
    attr_reader :name

    # Add a class variable of "bubbles" (@@bubbles). The variable should hold a value of a string: "bubbles everywhere".
    @@bubbles = "bubbles everywhere"

    def initialize(name_arg)
        @name = name_arg
        @hunger_time = 0.1
        @last_hunger_change = Time.now
        @hunger_level = 9
    end

    # Add an instance behavior called "shower". Its body can be empty, return whatever you want or just puts something.
    def shower
        puts "it's raining today"
        head_n_shoulders
    end

    def head_n_shoulders
        # rinse, lather, repeat
        rinse
        lather
        head_n_shoulders
    end

    def rinse
        puts "💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧💧"
    end

    def lather
        puts "🧼 🧼 🧼 🧼 🧼 🧼 🧼 🧼 "
    end

    # def name
    #     @name
    # end

    # def are_there_bubbles?
    #     @@bubbles
    # end

end

# When creating a new person, we should provide only an argument of a name.
programmer = Person.new("Programmer")

binding.pry
0





