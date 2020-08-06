require 'pry'

class Doctor

    @@all = []
    # ALL = []

    attr_accessor :name, :hourly_rate, :city
    attr_reader :specialty

    def initialize(name, specialty, city="New York")
        @hourly_rate = "$50"
        @city = city
        @name = name
        @specialty = specialty
        @@all << self
    end

    def self.all
        @@all
    end

    #build an instance method that will show all the patients of the doctor
    #recipe:
    # 1. make doctor instance know about their appointments
    # 2. from their appointments get only the patients

    def appointments
        # 1. access the Appt's @@all variable
        # 2. from there, select only the appoints whose doctor is self
        Appointment.all.select{|appointment| appointment.doctor == self}
    end

    def patients
        # binding.pry
        self.appointments.map{|appointment| appointment.patient}
        # self.appointments.map(&:patient)
    end
    
end 