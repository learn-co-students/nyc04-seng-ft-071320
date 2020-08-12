class Plant

end


  # CRUD
  
  # Create
  # Plant.new - create a Ruby instance
  # Plant#save - save a Ruby instance to the database
  # Plant.create - new + save

  # Read
  # Plant.all - gives us Ruby inst for all rows in the db
  # Plant.first/last -> first/last instance in the db
  # Plant.find(:id) -> find by the id 
  # Plant.find_by() -> takes a hash and returns one inst
  # Plant.where -> takes a hash and returns a collection

  # Update
  # Plant#save -> take a Ruby instance and update it (if it already has an id)
  # Plant#update -> takes a hash and updates the database
  # Plant.update -> update alll the things

  # Delete
  # Plant#destroy -> delete one thing from the database
  # Plant.destroy_all -> delete everything