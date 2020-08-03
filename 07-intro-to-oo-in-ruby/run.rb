require 'pry'

class String

    def excited
        binding.pry
        self.upcase + "!!!"
    end

end



class Dog

    def bark
        puts "woof"
    end

    def sleeping
        puts "zzzzz"
    end
end 


floof = Dog.new

class Animal
end

simba = Animal.new

binding.pry
0

# Define object in programming domain
#  Create a class and instantiate an instance of the class
#  Add behavior to the instance of a class
#  Explain the difference between a class and an instance



# dry = "don't repeat yourself"

