class BurgerOrder < ApplicationRecord
  belongs_to :burger
  belongs_to :order

  def burger_name_plx
    self.burger.name
  end

  def burger_price
    self.burger.price
  end

end
