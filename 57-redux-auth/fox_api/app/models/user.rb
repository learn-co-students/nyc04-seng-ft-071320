class User < ApplicationRecord
    has_many :pets
    has_many :foxes, through: :pets

    has_secure_password
end
