require 'pry'

class Dog

    attr_reader :breed
    attr_accessor :fav_snack, :name

    @@breed = ""

    def initialize(name_argument, fav_snack_argument, breed_argument)
        @name = name_argument
        @fav_snack = fav_snack_argument
        @breed = breed_argument
        @@breed = @breed
        @number_of_legs = 4
    end

    def what_is_the_breed
        @@breed
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

lilo_the_maltese = Dog.new("Lilo", "bones", "maltese")
chaos_the_corgi = Dog.new("Chaos", "bacon", "corgi")

binding.pry
0