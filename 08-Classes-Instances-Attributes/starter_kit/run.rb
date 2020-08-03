require 'pry'

class Dog

    def bark
        puts "woof"
    end

    def sleep
        puts "zzzzz"
    end

end 

floof = Dog.new
preciosa = Dog.new
ruby = Dog.new

binding.pry
0