require 'pry'
require 'require_all'

require_all 'models'
# binding.pry

# require_relative 'models/doctor.rb'
# require_relative 'models/patient.rb'

doctor1 = Doctor.new("Dr Evil", "evilness") #will have one appt
doctor2 = Doctor.new("Dr Peppers", "necromancy") #will have many appt
doctor3 = Doctor.new("Dr Oz", "optometry", "London") #will have no appt
doctor4 = Doctor.new("Dr Genius", "brain power") 

patient1 = Patient.new("Isabel") #will have one appt
patient2 = Patient.new("Annie") #will have many appt
patient3 = Patient.new("Eric") #one appt
patient4 = Patient.new("Sylwia") #no appt

# date, time, description, doctor, patient
a1 = Appointment.new("25sep", "5pm", "too much boocha", doctor1, patient1)
a2 = Appointment.new("4sep", "6pm", "too much anime", doctor2, patient2)
a3 = Appointment.new("24sep", "6pm", "too much bubble tea", doctor4, patient2)
a4 = Appointment.new("14sep", "6pm", "too much bubble tea", doctor4, patient2)
a5 = Appointment.new("5 aug", "3pm", "fortnite fatigue", doctor2, patient3)

# building many-to-many relationship:
# 1. create a file with the appt class
# 2. check whether runner file is connected with appt file
# 3. create seed data


binding.pry
0