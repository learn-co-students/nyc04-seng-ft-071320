class Appointment < ActiveRecord::Base
  belongs_to :dog
  belongs_to :vet
end