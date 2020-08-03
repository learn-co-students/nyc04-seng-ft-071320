require 'pry'

class Dog

    #  Use attr_ macros instead of reader and writer methods
    #  Define attribute readers and writers
    attr_reader :breed, :blood_type, :number_of_legs
    attr_accessor :fav_snack, :name, :attitude

    # Pass arguments to new by defining an initialize method in class
    def initialize(name_argument, fav_snack_argument, breed_argument, blood_type_arg, attitude_argument = "jolly")
        #  Define instance variable
        @name = name_argument
        @fav_snack = fav_snack_argument
        @breed  = breed_argument
        @blood_type = blood_type_arg
        @number_of_legs = 4
        @attitude = attitude_argument
    end

    #  Define attribute readers and writers
    # def name # reader or getter
    #     @name
    # end

    def what_is_this_dog_called
        puts "this dog is called #{@name}"
    end

    #  Define attribute readers and writers
    # def name=(new_name) #writer or setter
    #     @name = new_name
    # end

    def bark
        puts "woof"
    end

    def sleep
        puts "zzzzz"
    end

end 

# Pass arguments to new by defining an initialize method in class
fluff = Dog.new("Fluffy", "bones", "maltese", "AB")
preciosa = Dog.new("Preciosa", "bacon", "corgi", "A", "sad as hell")
# ruby = Dog.new

binding.pry
0




#  Add behavior to a class instance