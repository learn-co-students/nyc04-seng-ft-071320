class Order < ApplicationRecord
  belongs_to :user
  has_many :burger_orders 
  has_many :burgers, through: :burger_orders 

  def total
    self.burgers.sum(:price)
  end

  def nice_timestamp
    self.created_at.strftime("%m/%d/%Y")
  end

end
