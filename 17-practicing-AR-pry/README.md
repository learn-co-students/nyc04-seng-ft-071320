# Using pry

In this lab, the models are `Dog`, `Vet`, and `Appointment`.

## Relationships
Create `has_many`, `belongs_to`, and `has_many through` relationships for each model.

Dog -----< Appointment >----- Vet

A Dog can have many Appointments.
A Vet can also have many Appointments.
An Appointment can only have one Dog and one Vet.

## Getting started
1. Run `bundle` to install all gems.
2. Write the relationship macros for `Dog`, `Vet`, and `Appointment` in their model files.
3. Run `rake db:migrate` to migrate all the tables to the database.
4. Run `rake db:migrate:status` to confirm that all the tables were migrated successfully.
5. Create `seeds.rb` in the `db` directory.
6. Write seed data for the models.
7. Run `rake db:seed` to seed the database with the seed data.
8. Run `rake console` to enter a pry session and play around with the data.

## Deliverables
#### Dog
* `Dog#bark` returns the following string, "Hello, my name is #{self.name} and I am a #{self.breed}. Woof woof!"
* `Dog#all_appointments` returns "You have a #{reason} appointment on #{date} with #{vet.name}. Bark!" for each appointment.
  * If this Dog instance doesn't have any appointments, return "You don't have any appointments. Arf!"

#### Vet
* `Vet#dog_list` finds all the Dog instances that this vet has an appointment with. Returns "You have appointments with [array of dog names]."