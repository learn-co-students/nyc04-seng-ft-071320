class Appointment

    attr_accessor :date, :time, :doctor, :patient, :description

    @@all = []
    
    def initialize(date, time, description, doctor, patient)
        @date = date 
        @time = time 
        @doctor = doctor 
        @patient = patient
        @description = description
        @@all << self
    end

    def self.all
        @@all
    end
end