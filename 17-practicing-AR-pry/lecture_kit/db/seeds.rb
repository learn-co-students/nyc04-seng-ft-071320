Dog.destroy_all
Vet.destroy_all
Appointment.destroy_all

fido = Dog.create(name: "Fido", age: 12, breed: "Beagle")
lassie = Dog.create(name: "Lassie", age: 4, breed: "Border Collie")
frankie = Dog.create(name: "Frankie", age: 8, breed: "Corgi")

dr_squidward = Vet.create(name: "Dr. Squidward")
dr_spongebob = Vet.create(name: "Dr. Spongebob")
dr_larry = Vet.create(name: "Dr. Larry")

app_1 = Appointment.create(date: "Sept 2, 2020", reason: "Annual checkup", dog_id: fido.id, vet_id: Vet.all.sample.id)
app_2 = Appointment.create(date: "Sept 10, 2020", reason: "X-ray", dog_id: Dog.all.sample.id, vet_id: Vet.all.sample.id)
app_3 = Appointment.create(date: "09/12/2020", reason: "Dental surgery", dog_id: Dog.all.sample.id, vet_id: Vet.all.sample.id)
app_4 = Appointment.create(date: "09/20/2020", reason: "Vaccines", dog_id: Dog.all.sample.id, vet_id: Vet.all.sample.id)

olive = Dog.create(name: "Olive", age: 1, breed: "Pitbull")

puts "All done!"

# Run `rake console`
# in-memory storage vs. database storage
# data that is stored to the variable vs. what is updated in the database
# instead of updating a variable's attribute and then calling `.save`, it's better to call `.update` from the beginning

# fido = _
# this saves the last line that you ran in pry to that variable

# the instances written in the seed file are only locally scoped, so they will not work in the pry session (rake console)
# rake console allows you to play around with the database
# you can still run binding.pry inside your seed file to test methods and check the validity of your seed data

################ instances ################

# fido = Dog.find_by(name: "Fido")
# lassie = Dog.find_by(name: "Lassie")
# frankie = Dog.find_by(name: "Frankie")

# squidward = Vet.find_by(name: "Dr. Squidward")
# spongebob = Vet.find_by(name: "Dr. Spongebob")
# larry = Vet.find_by(name: "Dr. Larry")

################ TESTS ################

# fido.bark
# lassie.bark
# frankie.bark

# fido.num_of_appointments
# lassie.num_of_appointments
# frankie.num_of_appointments

# fido.all_appointments
# lassie.all_appointments
# frankie.all_appointments

# dr_squidward.dog_list
# dr_spongebob.dog_list
# dr_larry.dog_list