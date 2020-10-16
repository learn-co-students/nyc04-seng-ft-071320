class User < ApplicationRecord
  has_many :snacks
  validates_uniqueness_of :username
  has_secure_password
end
