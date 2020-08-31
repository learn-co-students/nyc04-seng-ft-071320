class Student < ApplicationRecord
    has_many :favorites, -> {order ("priority_level DESC")}, dependent: :destroy

    def full_name
        self.first_name + " " + self.last_name
    end

    def full_name_and_age
        self.first_name + " " + self.last_name + ", age: " + self.age.to_s
    end

    default_scope { order(first_name: :asc)}

    validates :first_name, presence: true, uniqueness: true
    validates :last_name, presence: true, uniqueness: true
    validates :age, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 13 }


    ## uniqueness

    ## age:
    # age range
    # integer

    ## first_name, last_name: 
    # special characte check
    # presence
    # length -> what about people who have long last names
    # no spaces
    # not empty
    # limit on number of names

    ## nickname:
    # no integers in the nickname

end
