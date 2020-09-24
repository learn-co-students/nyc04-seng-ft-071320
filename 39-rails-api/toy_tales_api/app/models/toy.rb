class Toy < ApplicationRecord
    validates :name, uniqueness: true
end
