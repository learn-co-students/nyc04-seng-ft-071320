class User < ApplicationRecord
    # All the blogs that a user has authored
    has_many :blogs
    has_many :comments

    # All the blogs that a user has commented on
    has_many :blogs, through: :comments
end
