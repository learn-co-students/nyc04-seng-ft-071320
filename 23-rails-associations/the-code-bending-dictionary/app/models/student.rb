class Student < ApplicationRecord

    def full_name
        self.first_name + " " + self.last_name
    end

end
