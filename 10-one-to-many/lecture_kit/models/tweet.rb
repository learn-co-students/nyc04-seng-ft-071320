require 'pry'

class Tweet

    attr_reader :message, :user

    @@all = []
    # binding.pry

    def initialize(message_par, user_par)
        @message = message_par
        @user = user_par
        @@all << self
        # binding.pry
    end

    def self.all
        @@all
    end

    def username
        # binding.pry
        # @user.username - instance variable
        self.user.username  # method "user" that returns the instance variable
        # user.username - method lookup chain -- it's the same as the above but sometimes has gotchas
        
    end
    
end


# - [ ] `Tweet.all` returns all the Tweets created.
# recipe for .all:
# 1. define a class variable (with a value of an empty array)
# 2. define a self.all method
# 3. push a newly created instance to the class variable

# - [ ] `Tweet#username` returns the username of the tweet's user


# - [ ] `Tweet#message` returns a string
# - [ ] `Tweet#user` returns an instance of the user class


# recipe for initialize:
#  1. write the method with the parameters
#  2. write the instance variables
#  3. create attr_ macros