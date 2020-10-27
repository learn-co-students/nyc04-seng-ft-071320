class Pet < ApplicationRecord
  belongs_to :user
  belongs_to :fox
end
