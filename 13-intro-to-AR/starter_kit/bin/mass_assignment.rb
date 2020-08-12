require_relative "../config/environment"


class Clown
  attr_accessor :name, :age, :fears, :skill

  @@all = []

  def initialize(args_hash)
    args_hash.each do |key, value|
      self.send("#{key}=", value)
    end
    @@all << self
  end

  def self.all
    @@all
  end

end

krusty = Clown.new(name: "Krusty", fears: "chainsaws" , skill: "baloons", age: 42)

# krusty = Clown.new({fears: "chainsaws" , skill: "baloons", age: 42, name: "Krusty", hunger: 55})

# krusty = Clown.new("Krusty", 42, "baloons", "chainsaws")





binding.pry
"yay"