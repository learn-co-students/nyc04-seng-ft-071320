class User

    attr_accessor :bio
    attr_reader :username

    # def username
    #     @username
    # end

    def initialize(name_par, bio_par)
        @username = name_par
        @bio = bio_par
    end

    def tweets
        Tweet.all.select{|tweet| tweet.user == self}
        #do something here
    end

    def post_tweet(message_param)
        # 1. create a tweet
        # 2. link it to the user
        Tweet.new(message_param, self)
    end
    
end

# - [ ] `User#tweets` returns an array of Tweet instances
# - [ ] `User#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweet collection