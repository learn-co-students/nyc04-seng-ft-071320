require 'pry'

class Dog

    attr_reader :breed
    attr_accessor :fav_snack, :name

    def initialize(name_argument, fav_snack_argument, breed_argument)
        @name = name_argument
        @fav_snack = fav_snack_argument
        @breed  = breed_argument
        @number_of_legs = 4
    end

    def run
        puts "#{@name} the #{@breed}running fast as the wind"
    end

    def sit
        puts "#{@name} is sitting on its #{@number_of_legs} legs"
    end

    def bark(barking_sound)
        puts "#{@name} says: '#{barking_sound.upcase}!'"
    end

    def sleep
        puts "#{@name} is sleeping: 'zzzzz' and dreaming about #{@fav_snack}"
    end

end 

fluff = Dog.new("Fluffy", "bones", "maltese")
preciosa = Dog.new("Preciosa", "bacon", "corgi")

binding.pry
0