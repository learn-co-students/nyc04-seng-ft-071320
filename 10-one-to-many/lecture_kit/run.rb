#your code goes here
require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee dad", "a dad who loves coffee#")
annie = User.new("annie the coach", "i love js!!!!! and bubble tea")

tweet1 = Tweet.new("just gimme coffee", coffee_dad)
tweet2 = Tweet.new("what is self", coffee_dad)
tweet3 = Tweet.new("have #a coffee", coffee_dad)
tweet4 = Tweet.new("got beans?", coffee_dad)
tweet_annie = Tweet.new("i tried a new bubble tea!", annie)

annie.post_tweet("I can't wait to study js again!!!!")

# 1. access all tweets
# 2. check the last one




binding.pry
"cofee"