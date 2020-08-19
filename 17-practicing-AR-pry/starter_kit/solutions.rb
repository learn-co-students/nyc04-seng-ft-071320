# Dog

def all_appointments
  if self.appointments.length > 0
    self.appointments.map do |app|
      "You have a #{app.reason} appointment on #{app.date} with #{app.vet.name}. Arf!"
    end
  else
    "You don't have any appointments. Arf!"
  end
end

# Vet

def dog_list
  dog_names = self.appointments.map { |app| app.dog.name }
  "You have appointments with #{dog_names.join(", ")}."
end