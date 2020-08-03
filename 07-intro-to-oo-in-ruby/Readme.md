# Intro to Object Oriented Programming in Ruby

## Housekeeping:
- Roadmap document: expectations, labs, self-check, rubric
- Lectures divided in two
- Recording
- Lecture Code: clone the [class repo](https://github.com/learn-co-students/nyc04-seng-ft-071320)!
- Breaks: mid-lecture
- Patricipation: this is an interactive class
- Do not code along
- Questions:
    - Ask lecture-related questions in zoom chat or raise your hands when I open time for qs
    - Ask lab-related questions in Slack

## Learning Goals:

- [ ] Define object in programming domain
- [ ] Create a class and instantiate an instance of the class
- [ ] Add behavior to the instance of a class
- [ ] Explain the difference between a class and an instance
- [ ] Extend a String class

## Define object in programming domain
* "Everything in Ruby is an object." 
    * Ruby is Object-Oriented. Ruby only knows objects. Everything is an object. Every object is an instance of a class.
    * What does that mean? 
        ``` ruby
        poem = "W Szczebrzeszynie chrząszcz brzmi w trzcinie"
        puts poem.class
        ```
        * what is the data type (class) of `poem`?
        * what is the value of `poem`?
        * what is the behavior of `poem`?
        * what's happening when we run this code: `poem.methods`
    * What about `poem.class.class`?
    * Is `"whoopsy daisy"` an object too?

**TASK:**
In irb run this code:
`names = [“Annie”, "Eric", “Isabel”, "Sylwia"]`
Now, guess: what will we get back if we run  `puts names.class`? Run it and check.
Transform `names` into a string with all the names separated by a comma. 

## Create a class and instantiate an instance of the class 
* Creating hash for dogs with dog's type and breed:
    ```ruby
    dog1 = {"name": "ruby", "breed": "maltese"}
    dog2 = {"namne": "floof", "breed": "corgi"}
    ```
* Why don’t we want to do this? 
    * We don't want to write your code over and over again.
    * Why is this inefficient?
        * You might have typos, which breaks the code
        * Changing properties on the hash requires accessing attributes using [ ] syntax.
    * Instead of defining dog every time, what if we want a blueprint for a dog.

* Create a Class
    ```ruby
    class Dog
    
    end
    ```
* How to create new objects for a class?
    ```ruby
    Dog.new()
    ```
    * Ruby assigns this object an id to this object in the computer's memory -- think about it like ikea warehouse aisles with same objects stored at the same address (e.g. aisle 14, bin 4, up). 
    <img src="ikea_product_tag.jpeg" height="200px" width="auto" style="display:inline" alt="ikea product tag">
    <img src="ikea_warehouse.jpg" height="200px" width="auto" style="display:inline"  alt="ikea warehouse aisle">
    
    To check the number, you can run: `Dog.new().object_id`

## Add behavior to the instance of a class
* To make it possible for the class instances to "do" something, we need to add a behavior (or, methods). Let's make the dog bark.


## Explain the difference between a class and an instance

**TASK (5 mins):**
* What is a class and what is an instance in this example:
    ```ruby
    simba = Animal.new
    ```
* If you were to explain what a class and instance is to a 5-year-old, what would you say?


## Extend Ruby classes (e.g. String)
In your irb, run: 
```ruby
    hagrid_quote = "You're a wizard, Harry"
    hagrid_quote.excited
```
Did it work?

Now, what if I told you you can make it work? 
```ruby
class String

    def excited
        self.upcase + "!!!"
    end

end
```
Here we are extending the class of String by adding a new method (it's also called "monkey-patching"). When to do it:
- if you know that in your code every single time you will need a specific method on a class (this is helpful when we will be dealing with custom errors in mod3)

Why not to do it:
- you may end up overwriting already existing method;
- it's really rare that you'd need a method on all strings;
- you may confuse your colleagues;