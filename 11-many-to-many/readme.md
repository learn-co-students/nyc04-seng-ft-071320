# One to Many Relationships
---

## LGs:
- [ ] Revise one-to-many
- [ ] Practice keeping groups of data related to classes on the class as a class variable
- [ ] Practice domain modelling 
- [ ] Demonstrate Single Source of Truth by not storing collections of objects on other objects and storing objects only in one place (the class where they belong to)
- [ ] Implement both sides of a many to many relationships


## Outline

* Quick review of one-to-many:
  * Single Source of Truth Principle:
    - "Class can only store information about their own instances"
    - "Can’t steal child from other family"
    - "Don’t add stuff where they are not supposed to be"
  * What is an example of one-to-many relationship:
    - Tweet belongs to a User, User has many Tweets;
    - Comment belongs to a Video, Video has many Comments;
  * In one-to-many relationship (e.g. Tweet >- User), on which side do I treat the instance as a parameter to initialize to connect the two models?
    - when initializing Tweet, we pass a User instance as an argument;
    - when initializing Comment, we pass a Video instance as an argument;
  * In one-to-many relationship, can a User have 0 Tweets?

## How to think about relationships
1. For every one (x), how many (y)? 
2. For every one (y), how many (x)?

## Many-to-Many
1. One-to-many
- Tweet User
- League Team Player
- City School Student

2. Many-to-many
3 mins to come up with examples

---

## Practice keeping groups of data related to classes on the class as a class variable

Doctor and Patiens

* How many classes do we need?
* Let's discuss the attributes
    * Doctor: ?
    * Patient: ?
    * ?
* Let's discuss the methods
    * What are the minimum methods we are going to need?
      * initialize
      * .all
* Create Class.all method for all the classes

## Tasks (10 mins):
1. Create Patient class with: `initialize` method, `attr_` macro and `.all` method.
1. Create Doctor class with: `initialize` method, `attr_` macro and `.all` method.

## Domain modelling:

![](https://i.imgur.com/IXtlVuq.png)
* A doctor has many patients and a patient has many doctors
* A doctor has many appointments / appointment belongs to doctor (we already know how to model this)
* A patient has many appointments / appointment belongs to patient (we already know how to model this)
* A doctor has many patients through appointments
* A patient has many doctors through appointments

## Understand single source of truth by not storing collections of objects on other objects
* How can we build relationship among these classes?
    * Using JOINER class
* Connecting all three classes using JOINER class:
    * Make sure to pass into a joiner instance the instances of the other two classes.

## Tasks (10 mins):
2. Create JOINER class with `initialize` method, `attr_` macros and `.all` method.
3. Create `#doctors` method is Patient class that return all the doctors who has appoinment with a perticular patient (hint: you need a helper method)

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