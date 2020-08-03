require 'pry'

# creating a new class:
class Animal
end

# creating new Animal instances:
simba = Animal.new #this is an animal instance saved to a variable
Animal.new #this is also an animal instance!

# creating a new class with two behaviors:
class Dog

    def bark
        puts "woof"
    end

    def sleeping
        puts "zzzzz"
    end
end 

floof = Dog.new

# extending (or, monkey-patching) the String class: 
class String

    def excited
        self.upcase + "!!!"
    end

    def tired 
        self.downcase + "I need some rest :(:(:("
    end 

    def reverse
        # self.reverse + "?!"
        self + "?!"
    end

    # def translate_polish(eng_word)
    #     print "how do you say '#{eng_word}' in Polish?"
    # end

end

binding.pry
0

#Learing Goals:
# ✅ Define object in programming domain
# ✅ Create a class and instantiate an instance of the class
# ✅ Add behavior to the instance of a class
# ✅ Explain the difference between a class and an instance
# ✅ Extend the String class 
