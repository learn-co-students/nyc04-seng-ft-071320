# Lecture notes
## Playing with rake console
* Run `Model.all` for each model to make sure that all the seed data was created correctly.
Example: `Dog.all`, `Vet.all`, etc.

* Assign the first instance of that model to a variable.
Example: `fido = Dog.first`

* Or if there's a specific instance you want to play around with, use the `find_by` method.
Example: `lassie = Dog.find_by(name: "Lassie")`

* Debug `Dog#all_appointments` in pry.

## Datetime format
* Why does the last Appointment instance have a nil date?