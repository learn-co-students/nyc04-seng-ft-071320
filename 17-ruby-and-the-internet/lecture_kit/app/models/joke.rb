class Joke < ActiveRecord::Base
  has_many :fav_jokes
  has_many :users, through: :fav_jokes

end
