class Favorite < ApplicationRecord
  belongs_to :student
  belongs_to :word

  validates :priority_level, numericality: {only_integer: true}, inclusion: {in: 1..5, message: " needs to be between 1 and 5" }

  ### priority_level
  ## it should an integer
  ## not negative
  ## within a range (1-5) 
  ## no decimal

end
