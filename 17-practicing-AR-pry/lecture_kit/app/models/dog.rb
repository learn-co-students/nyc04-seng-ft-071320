class Dog < ActiveRecord::Base
  has_many :appointments
  has_many :vets, through: :appointments

  def bark
    "Hello, my name is #{self.name} and I am a #{self.breed}. Woof woof!"
    binding.pry
    # i don't have to require 'pry' at the top because of the way the repo is configured
    # you can still run rake console and then simply call this method and it will enter the binding.pry
  end

  def num_of_appointments
    "You have #{self.appointments.count} appointments. Bark!"
  end

  def appointments
    self.appointments
    # fido.appointments
    # => [app_1, app_2]

    # stack overflow! ruby gets stuck in an infinite loop because the method is called `appointments` AND the code block calls on `.appointments`

    # ruby runs top to bottom, so if it runs methods with the same name, it will just run the last method
    
    # you CAN overwrite an existing method, which is called monkeypatching, but this is NOT recommended
  end

  def appointments
    puts "Hello, world!"
  end

  def all_appointments
    # write your code here
    # access Appointment class
    # use the find enumerator
    # check for the instance having an appointment

    self.appointments
    # self.appointments[0].vet.name
    # => "Dr. something"
  end

end

# TEST #
# * `Dog#all_appointments` returns "You have a #{reason} appointment on #{date} with #{vet.name}. Bark!" for each appointment.
#   * If this Dog instance doesn't have any appointments, return "You don't have any appointments. Arf!"