class Assignment < ApplicationRecord
  belongs_to :classroom
  # delegate :teacher, to: :classroom
end
