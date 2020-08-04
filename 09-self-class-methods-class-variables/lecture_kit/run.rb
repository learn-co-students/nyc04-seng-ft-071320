require 'pry'

class Dog

    attr_reader :breed
    attr_accessor :fav_snack, :name

    #variable => locally-scoped, exists only within a method
    #@variable => instance variable, which is always carried everywhere with the instance
    #@@variable => class variable, every instance can access it

    @@all = [] #the box for the Dog class

    @@breed = ""

    def initialize(name_argument, fav_snack_argument, breed_argument)
        # binding.pry
        @name = name_argument
        @fav_snack = fav_snack_argument
        @breed = breed_argument
        @@breed = @breed
        @number_of_legs = 4
        # what if we pass this newly-created instance of the dog to the @@all variable or the box?
        @@all << self
    end

    #class method needs to begin with "self"
    def self.all
        # binding.pry
        @@all
    end

    #self is the object on which the method is called (or to which the method is chained)

    #self is the object the context of which the method is defined
    #"self is a special variable that points to the object/class that "owns" the currently executing code." 

    def run #instance method, you chain it to an instance of a Dog
        # binding.pry
        puts "#{@name} the #{@breed} is running fast as the wind"
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


    # def who_am_i
    #     puts "I am #{self}"
    # end
    
    # def self.who_am_i
    #     puts "I am #{self}"
    # end

    def what_is_the_breed
        @@breed
    end

end 

lilo_the_maltese = Dog.new("Lilo", "bones", "maltese")
chaos_the_corgi = Dog.new("Chaos", "bacon", "corgi")

binding.pry
0