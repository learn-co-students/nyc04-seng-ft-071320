# Many to Many Relationship
---


## Post lecture
Here's <a href="https://flatironschool.zoom.us/rec/play/uJAlc-yu_Go3HdySsQSDA_FwW424e_ms1iVIqfoFzxu8ViYCO1WlM7RHZOCffYfMD-NFnCgYV-M_K90F?continueMode=true"> the lecture video </a>
Here's <a href="https://github.com/learn-co-students/nyc04-seng-ft-071320/blob/master/07-intro-to-oo-in-ruby//Users/sylwiavargas/access-labs/nyc04-seng-ft-071320/09-self-class-methods-class-variables/W1-Thu-many-to-many.txt"> the lecture chat </a>


## LGs:
- [x] Revise one-to-many
- [ ] Practice keeping groups of data related to classes on the class as a class variable (`@@all`)
- [ ] Practice domain modelling 
- [ ] Demonstrate Single Source of Truth by not storing collections of objects on other objects and storing objects only in one place (the class where they belong to)
- [ ] Implement both sides of a many to many relationship


## Outline

* Quick review of one-to-many:
  * Single Source of Truth Principle:
    - "Class can only store information about their own instances"
    - "Can’t steal child from other family"
    - "Don’t add stuff where they are not supposed to be"
    - `@@all`: you can only have instances of the same class
  * What is an example of one-to-many relationship:
    - Tweet belongs to a User, User has many Tweets;
    - Comment belongs to a Video, Video has many Comments;
  * In one-to-many relationship (e.g. Tweet >- User), on which side do I treat the instance as a parameter to `initialize` to connect the two models?
      ```
      class Tweet
          def initialize(message, user)
            @message = message
            @user = user
          end
      end
      ```
    - when initializing Tweet, we pass a User instance as an argument;
    - when initializing Comment, we pass a Video instance as an argument;
  * In one-to-many relationship, can a User have 0 Tweets?
    - YES!!!!

## How to think about relationships
1. For every one (x), how many (y)? 
2. For every one (y), how many (x)?

## Many-to-Many


1. One-to-many
- Tweet >- User
- League -< Team -< Player
- City -< School -< Student

2. Many-to-many
<!-- 3 mins to come up with examples -->
Movie -< Character >- Actor
Game -< Session >- Player
Driver -< Ride >- Passenger

Material and products  
Employees to jobs  
Rental Car and owners

---

## Practice keeping groups of data related to classes on the class as a class variable

Doctor -< Appointment >- Patient

<!-- YAGNI: You aren't gonna need it -->

* How many classes do we need?
    * 3 classes because it is a many-to-many relationship
* Let's discuss the attributes
    * Doctor: name, specialty
    * Patient: name
    * ?
* Let's discuss the methods
    * What are the minimum methods we are going to need?
      * initialize
      * .all
* Create Class.all method for all the classes

## Tasks (8 mins):
1. Create Patient class with: `initialize` method, `attr_` macro and `.all` method.
1. Create Doctor class with: `initialize` method, `attr_` macro and `.all` method.

## Domain modelling:

![](https://i.imgur.com/IXtlVuq.png)
* A doctor has many patients and a patient has many doctors
* A doctor has many appointments / appointment belongs to doctor (we already know how to model this -> one-to-many relationship)
* A patient has many appointments / appointment belongs to patient (we already know how to model this -> one-to-many relationship)
* A doctor has many patients through appointments
* A patient has many doctors through appointments

## Understand single source of truth by not storing collections of objects on other objects
* How can we build relationship among these classes?
    * Using JOINER class
* Connecting all three classes using JOINER class:
    * Make sure to pass into a joiner instance the instances of the other two classes.

## Tasks:
1. Create `#patients` method in Doctor class that returns all the patients who has appoinment with a perticular doctor (hint: you need a helper method)

## Implement both sides of a many to many relationship
* many to many => one to many + one to many
* A doctor has how many appointments!
    * #appointments 
* A patient has how many appointments!
    * #appointments 
* A doctor has list of patients!
    * #patients
* A patients has list of doctors!
    * #doctors