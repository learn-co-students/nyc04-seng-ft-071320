## One to Many Relationships
===

### LGs:

* Implement one object to many objects relationship
  * One object _has many_ objects (user has many videos)
  * One object _belongs to_ another object (one video belongs to a user)
* Demonstrate the concept of an Entity Relationship Diagram
* Practice passing custom objects as arguments to methods
* Demonstrate Single Source of Truth
* Infer type of method (class or instance) through naming conventions

### Outline

* Quick review of OOP:
  * we created classes
  * we created instances of classes using `initialize`
  * we created instance and class methods
  * we used `attr_` macros for getters and setters
  - attr_reader -> when we don't wanna change the value
  - atrr_accessor -> when we want to have a getter/setter method (when we want to both read and change the value)
  - attr_writer -> it allows us to overwrite information (e.g. address)
  * we looked at `self`
  - it's whatever (object or instance) the method is being called on
  - it's a variable that holds what the method is chained to 


* Learn about object oriented relationships driven via _deliverables_!
  * Define terminology, understand the importance of using clear language in programming
    * Pair programming! Technical interviews!
  * Introduce new concepts
  * Convert those concepts to code
  * Learn how to test our own code (without Learn tests)

### Define

What do the following mean in plain English? What do they mean in programming?

* Model 
- example, a representation, a blueprint, a structure for something (a situation ?)
* Domain
- Myspace, YouTube or Twitter, a location
  - YouTube: videos, channel, comments, subscriptions
  - Twitter: tweets, users, lists
* Domain modeling

* Relationships
  * One to many relationship
  - YOUTUBE:
  - video belongs to a channel, a channel has many videos
  - video has many comments, comment belongs to a video

  - TWITTER:
  - user has many tweets, tweet belongs to a user

  * Many to many relationship

_Why do we care so much about codifying and being really specific about the terminology of has-many/belongs-to?_ The terms are very powerful because we can use the same idea to describe relationships across many different types of domains. The relationship between artist and song, is the same as book and author, user and tweets, etc.

* Schema
* Single Source of Truth
  * How can we start thinking about the data in our models?

### How to think about relationships
1. For every one (x), how many (y)? 
2. For every one (y), how many (x)?

### Deliverables

- [ ] Create a User class. The class should have these methods:
  - [x] `User#initialize` takes a username and a bio
  - [x] `User#username` returns a string for the username. _Should not_ be able to change after the user is created.
  - [x] `User#bio` returns a short biography for the user. _Should_ be able to change after the user is created.
  - [x] `User#tweets` returns an array of Tweet instances
  - [ ] `User#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweet collection
  - [ ] `User.print_tweets` that prints the message of each tweet to the screen in a pretty way
  - [ ] *bonus* `User.most_tweets` returns the instance of the user who has made the most tweets

- [ ] Create a Tweet class. The class should have these methods:
  - [x] `Tweet#message` returns a string
  - [x] `Tweet#user` returns an instance of the user class
  - [x] `Tweet.all` returns all the Tweets created.
  - [x] `Tweet#username` returns the username of the tweet's user

### Discussion Questions

- What is a one-many-relationship? How would we draw that in an ERD?
- What does Single Source of Truth mean?
- What is a model? Domain? Domain model?
- What is the relationship between a class and an instance?
