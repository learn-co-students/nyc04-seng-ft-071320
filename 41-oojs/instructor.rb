require 'pry'

class Person 
  def initialize()
    puts "hello"
  end
end


class Instructor < Person

  attr_reader :name, :full_name
  @@all = []
  
  def initialize(name_arg, full_name)
    super()
    @name = name_arg
    @full_name = full_name

    @@all.push(self)
  end

  def introduce
    "Hello, I'm #{ self.full_name }!"
  end

end





eric = Instructor.new("Eric", "Eric Kim")












binding.pry
