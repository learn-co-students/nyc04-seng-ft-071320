class Vet < ActiveRecord::Base
  has_many :appointments
  has_many :dogs, through: :appointments 

  def dog_list
    # write your code here
  end
end