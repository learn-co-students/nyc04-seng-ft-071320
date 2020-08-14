class Person < ActiveRecord::Base

    has_many :plant_parenthoods
    has_many(:plants, {through: :plant_parenthoods})


    # def plant_parenthoods
    #     PlantParenthood.select{|pp| pp.person == self}
    # end

    # def plants
    #     plant_parenthoods.map{|pp| pp.plant}
    # end

    def self.register 
        
        userInfo = TTY::Prompt.new.ask("What is your username?")
        ageInfo = TTY::Prompt.new.ask("What is your age?")
        
        if Person.find_by(name: userInfo) 
            puts "Sorry, it looks like that username is taken."
        else
            Person.create(name: userInfo, age: ageInfo.to_i)
        end
        
    end

end