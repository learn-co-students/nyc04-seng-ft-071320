class Blog < ApplicationRecord
    # Author of the blog
    belongs_to :user
    has_many :comments

    # All the users who commented on the blog
    has_many :users, through: :comments
end
