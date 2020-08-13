class Person < ActiveRecord::Base

    has_many :plant_parenthoods
    has_many(:plants, {through: :plant_parenthoods})


    # def plant_parenthoods
    #     PlantParenthood.select{|pp| pp.person == self}
    # end

    # def plants
    #     plant_parenthoods.map{|pp| pp.plant}
    # end

end