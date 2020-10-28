class BurgerOrder < ApplicationRecord
  belongs_to :burger
  belongs_to :order
end
