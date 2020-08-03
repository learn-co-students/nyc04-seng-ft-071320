require 'pry'

class Dog

    #  Use attr_ macros instead of reader and writer methods
    #  Define attribute readers and writers
    attr_reader :breed, :blood_type, :number_of_legs, :color, :gender
    # attr_writer
    attr_accessor :fav_snack, :name, :attitude, :eyes, :ears #setter + getter

    # Pass arguments to new by defining an initialize method in class
    def initialize(name_argument, fav_snack_argument, breed_argument, blood_type_arg,  eyes_argument, color_arg, gender_arg, attitude_argument = "jolly", ears_arg = "3")
        #  Define instance variable
        @name = name_argument
        @fav_snack = fav_snack_argument
        @breed  = breed_argument
        @blood_type = blood_type_arg
        @number_of_legs = 4
        @attitude = attitude_argument
        @eyes = eyes_argument
        @color = color_arg
        @gender = gender_arg
        @ears = ears_arg
    end

    #  Define attribute readers and writers
    # def name # reader or getter
    #     @name
    # end

    def what_is_this_dog_called
        puts "this dog is called #{@name}"
    end

    def run
        puts "running fast as the wind"
    end

    def sit
        puts "#{@name} is sitting on its #{@number_of_legs} legs"
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

# initialize(name_argument, fav_snack_argument, breed_argument, blood_type_arg,  eyes_argument, color_arg, gender_arg, attitude_argument = "jolly", ears_arg = "3")
fluff = Dog.new("Fluffy", "bones", "maltese", "AB", "3", "pink", "male")
preciosa = Dog.new("Preciosa", "bacon", "corgi", "A", "4", "red", "female", "happy as rainbow")
# ruby = Dog.new

binding.pry
0




#  Add behavior to a class instance