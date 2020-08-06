require 'pry'
require_relative 'models/doctor.rb'
require_relative 'models/patient.rb'

doctor1 = Doctor.new("Dr Evil")
doctor2 = Doctor.new("Dr Peppers")
doctor3 = Doctor.new("Dr Oz")

patient1 = Patient.new("Isabel")
patient2 = Patient.new("Annie")
patient3 = Patient.new("Eric")
patient4 = Patient.new("Sylwia")


binding.pry
0