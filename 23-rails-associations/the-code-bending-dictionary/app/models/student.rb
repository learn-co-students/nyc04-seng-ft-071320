class Student < ApplicationRecord
    has_many :favorites, -> {order ("priority_level DESC")}, dependent: :destroy

    def full_name
        self.first_name + " " + self.last_name
    end

    def full_name_and_age
        self.first_name + " " + self.last_name + ", age: " + self.age.to_s
    end

    default_scope { order(first_name: :asc)}

end
