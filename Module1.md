# Mod 1 Instruction and Schedule for 071220: The Code Benders

## Table of contents
- [Mod1 Expectations](#mod1-expectations)
- [Week 1 Schedule](#week-1-schedule)
    - [W1 Monday](#w1-monday)
    - [W1 Tuesday](#w1-tuesday)
    - [W1 Wednesday](#w1-wednesday)
    - [W1 Thursday](#w1-thursday)
    - [W1 Friday](#w1-friday)
- [Code Challenge Rubric](#code-challenge-rubric)
- [Terminology](#terminology)

---

## Mod1 Expectations
Welcome to Module 1, where we will expand and deepen your understanding of Ruby. In the next three weeks, you should become more comfortable with writing Ruby in Object Oriented paradigm, combine it with a database and finally, create your own CLI. Please don't panic -- we will guide you through this process. 

In order to take most of this mod, please take these pieces of advice to heart:
- do your labs and make sure to at least skim the priority ones before the lecture;
- if anything is unclear, recognize it early and act on it: verbalize a question, google it, ask a peer or on [the questions channel](https://flatiron-school.slack.com/archives/C018TV7P7UG), ask a coach (in this order);
- check yourself for understanding -- you will find tasks/questions in the schedule section that help you self-check.

One thing to remember is that **Ruby was designed to make your life easier**. Now, because you don't have much experience with other programming languages, it may be difficult at times to trust that this is the best it gets but please take the best practices I share in the lecture to heart. It will all make sense. 

Lastly, a point that often frustrates students is that we first learn how something works under the hood (or, do it the long way), then learn that Ruby has a handy-dandy tool/abstracted method to do it all in just one line, and only then we learn that there's even more ✨ magic ✨ to use. "Why couldn't we just learn the magic?", we often hear. Well, think about it this way: 
- 🎂 you may just go to the bakery and buy **a ready-made Red Velvet cake**. Sure, everyone will be happy. However, does this make you a good pastry chef? No. 
- 🥣 Okay, so you can go to a store and buy **a cake mix** and you bake it at home. You can customize it a bit and while that doesn't make you a chef, you certainly know at least how the oven works. 
- 🥚 However, the true chef would **make a Red Velvet cake from scratch**: using eggs, flour (gluten-free or wholewheat) and other ingredients, control sugar measurements and the ultimate shape and height of the cake.

Same with Ruby and software development: you could just skip a few steps and get right to the magic but if you ever wanted to customize the magic, you need to know how it's working. 

In order to not leave you feeling tricked, I will gradually fill out this table marking how topics relate to each other so you see how what you learn actually has a purpose:

<table>
<tr>
    <td style="text-align:center" width="150px"> 🥚 </td>
    <td style="text-align:center" width="150px"> 🥣 </td>
    <td style="text-align:center" width="150px"> 🎂 </td>
</tr>
<tr>
    <td style="text-align:center" width="150px"> <code>def name</code> </td>
    <td style="text-align:center" width="150px"> <code>attr_reader</code> </td>
    <td style="text-align:center" width="150px"> ? </td>
</tr>
<tr>
    <td style="text-align:center" width="150px"> <code>def name=(name)</code> </td>
    <td style="text-align:center" width="150px"> <code>attr_writer </td>
    <td style="text-align:center" width="150px"> ? </td>
</tr>
<tr>
    <td style="text-align:center" width="150px"> <code>def name</code> and <code>def name=(name)</code> </td>
    <td style="text-align:center" width="150px"> <code>attr_accessor</code> </td>
    <td style="text-align:center" width="150px"> ? </td>
</tr>
</table>

Have a question? [Ask us!](https://flatiron-school.slack.com/archives/C018TV7P7UG)

---

## Week 1 Schedule

Week one of every module is designated for you to get exposure to different topics that you will consolidate over the following weekend and the days before the code challenge and then practice further in the project week. Usually, you will get **A LOT** of labs in the first days -- please know you will have time to finish them by the end of the week and focus initially on the priority ones. In Mod1 Week1 you will:
- write your own classes,
- use getter and setter methods for attributes,
- add instance and class methods,
- be able to check what `self` denotes,
- connect two (or more!) classes together,
- draw domain models,
- use `map`, `find`, `select` and `each` on instances of classes.

These are the skills you need to prioritize when studying this week. Please take every opportunity to write code. If you're lacking prompts from labs, just look around yourself and write a code description of your room (your room being one class, with other classes being furniture, people, plants, etc. -- add aspecific behaviors and interdependencies, etc.).

### W1 Monday

| Time | Activity |
| - | - |
|9:00 - 9:30| Take attendance on Slack |
|9:00 - 10:00| Day Labs: Introduction To Object-Orientation In Ruby|
|10:00 - 11:00| Workshop: Growth Mindset ([link](https://us02web.zoom.us/j/8326679493?pwd=c0dGSWFPaHlTV0tGNW5HVHNwdDdKZz09))|
|11:15 - 12:00| [Lecture][lecture-link]: Intro to Object-Oriented Programming in Ruby|
|12:00 - 12:30| Day Labs: Introduction To Object-Orientation In Ruby|
|12:30 - 1:30| Lunch break|
|1:30 - 2:30| Day Labs: Introduction To Object-Orientation In Ruby|
|2:30 - 2:15| [Lecture][lecture-link]: classes, instances and attributes|
|3:15 - 5:30| Homework Labs |
|5:30 - 6:00| Stand Down |

#### Self-check questions
- Morning lecture: 
    - What are objects in Ruby? What is "behavior" and "data"?
    - How do I write a class in Ruby?
    - What is a class and instance? 
    - How do I create a new instance of the class?
    - How can I hack Ruby classes (e.g. String)? Why would I? 
- Afternoon lecture: 
    - What are "getter/reader" and "setter/writer" methods? How are they different? Why do we need them? What is the danger of mistaking them?
    - What is the difference between `attr_reader`, `attr_writer` and `attr_accessor`?
    - If I create two instances of a Dog class with exactly same attributes, will they be the same object?

#### Day labs list
Introduction To Object-Orientation In Ruby:
- **Intro To Classes And Instances** ⭐️
- **Classes And Instances Lab** ⭐️
- **Instance Methods** ⭐️
- **Instance Methods Lab** ⭐️
- **Instance Variables** ⭐️
- **Object Initialization** ⭐️
- **Object Initialization Lab** ⭐️
- Variables And Scope Quiz
- **Object Attributes** ⭐️
- **Object Attributes Lab** ⭐️
- Object Accessors
- **Meowing Cat** ⭐️
- OO Email Parser
- **Ruby Object Orientation Fundamentals Quiz** ⭐️
- **Object-Orientation In Ruby Bookend** ⭐️

#### Homework Labs
Topics In OO - Building Complex Class Objects In Ruby
- Introduction To Building Complex Class Objects In Ruby
- OO Basics
- OO School Domain
- OO Design
- Building Complex Class Objects In Ruby Quiz
- Building Complex Class Objects In Ruby Bookend

Topics In OO - Self In Ruby
- **Introduction To Self In Ruby** ⭐️
- The Fundamentals Of Self
- **OO Cash Register** ⭐️
- OO Counting Sentences
- **Self Quiz** ⭐️
- **Self Bookend** ⭐️


### W1 Tuesday

| Time | Activity |
| - | - |
|9:00 - 9:30| Take attendance on Slack |
|9:00 - 10:00| Day Labs|
|10:00 - 11:00| Mod 1 Logistics & Welcome|
|11:00 - 11:30| Prework Feedback & Survey|
|11:30 - 12:15| [Lecture][lecture-link]: self, class variables and class methods|
|12:15 - 12:45| Discussion Questions: Object Orientation in Ruby|
|12:45 - 1:45| Lunch break|
|1:45 - 2:00| [Pairing Contract][pairing-contract-link]|
|2:00 - 4:00| Pairing Lab: OO Person|
|4:00 - 4:15| Feedback form + feedbacking your partner |
|4:15 - 6:00| Homework Labs |

#### Self-check questions
- How do I recognize a class variable? How do I recognize an instance variable?
- How is instance variable (`@name`) different from just regular variable (`name`)?
- How do I write a class method? And instance method?
- What is `self`? How do I know if the `self` will denote a class or an instance?
- How can I check what `self` denotes?
- How can I store all instances of the same class? 

#### Day labs list
Topics In OO - Class Variables And Methods In Ruby
- Introduction To Class Variables And Methods In Ruby
- **Class Variables And Methods** ⭐️
- **Remembering Objects** ⭐️
- **Class Variables And Methods Lab** ⭐️
- OO Basics With Class Constants
- Private Methods
- **Class Variables And Methods Quiz** ⭐️
- **Class Variables And Methods Bookend** ⭐️

Topics In OO - Advanced Class Methods In Ruby
- Introduction To Advanced Class Methods In Ruby
- **Advanced Class Methods** ⭐️
- Advanced Class Methods Lab
- **Puppy Lab** ⭐️
- **Advanced Class Methods Quiz** ⭐️
- **Advanced Class Methods Bookend** ⭐️

#### Homework Labs
Topics In OO - Object Relationships In Ruby
- **Introduction To Object Relationships In Ruby** ⭐️
- Basics Of Object Relationships
- **Belongs To Object Lab** ⭐️
- **Has Many Object** ⭐️
- **Has Many Object Lab** ⭐️
- Collaborating Objects
- Collaborating Objects Lab


### W1 Wednesday

| Time | Activity |
| - | - |
|9:00 - 9:30| Take attendance on Slack |
|9:00 - 10:00| Day Labs|
|10:00 - 10:35| Discussion Questions: Self |
|10:30 - 12:30| Labs|
|12:30 - 1:30| Lunch break|
|1:30 - 3:00 | [Lecture][lecture-link]: Ruby relations (domain modelling + one-to-many)|
|3:00 - 3:15 | Pairing contract |
|3:15 - 5:15 | Pairing lab: OO My pets |
|5:15 - 5:30 | Feedback form & feedbacking your partner |
|5:30 - 6:00| Stand Down |

#### Self-check questions
- What examples (at least three) are there for one-to-many relationship type?
- How do I draw Entity Relationship Diagram (ERD, or domain model) to represent this type of the relationship?    
- What does Signle Source of Truth Principle mean?
- What steps do I need to do to connect two?
- Which instance should know about the other in the `initialize` method in a one-to-many relationship?
- What is the naming convention for a class method and for an instance method?

#### Day labs list
- Catch up on previous labs

#### Homework Labs
- OO Banking
- **Has Many Objects Through** ⭐️
- **Has Many Objects Through Lab** ⭐️
- **Object Relationships Quiz** ⭐️
- **Object Relationships Bookend** ⭐️


### W1 Thursday

| Time | Activity |
| - | - |
|9:00 - 9:30| Take attendance on Slack |
|9:00 - 11:00| Labs|
|11:05 - 12:30| Discussion Questions: Ruby Collections and Classes Group|
|12:30 - 1:30| Lunch break|
|1:30 - 3:30| [Lecture][lecture-link]: Ruby relations (many-to-many)|
|3:30 - 3:45| Pairing Contract|
|3:45 - 5:45| [Pairing Lab][pairing-feedback-link]: OO Boating School|
|5:45 - 6:00| Feedback form & Feedbacking your partner|

#### Self-check questions
- What examples (at least three) are there for many-to-many relationship type?
- How do I draw Entity Relationship Diagram (ERD, or domain model) to represent this type of the relationship?
- How many models do I need to represent the relationship between e.g. flights and passengers? 
- Where should the data about the passengers live? Where should the data about the flights live? 
- Which instance(s) should know about the other one(s) in the `initialize` method in a many-to-many relationship?
- Can I store same piece of data in two places? 

#### Labs list
- Catch up on previous labs or
Additional Practice: Object Oriented Ruby (Practice labs for Code Challenge)
- **OO Art Gallery** ⭐️
- **Animal Zoo** ⭐️
- **OO Challenge Relationships Practice(all easy ones)** ⭐️
- OO Has Many Through Template


### W1 Friday

| Time | Activity |
| - | - |
|9:00 - 9:30| Take attendance on Slack |
|9:00 - 10:00| Day Labs|
|10:00 - 11:30| [Lecture][lecture-link]: Boating School Review|
|11:45 - 12:30| AMA: Mod5 folks|
|12:30 - 1:30| Lunch break|
|1:30 - 3:30| Small group review: OO Kickstarter |
|3:15 - 4:00| Homework Labs |
|4:00 - 5:00| Feelings |
|5:00 - 6:00| Kahoot quiz |


#### Self-check questions
- How am I feeling?
- What is my process when approaching a lab?
- How much time does a lab takes me? 
- Where am I losing time when doing a lab?
- How many times am I using `binding.pry` (the more, the better)?
- How many instances of seed data should I create for each model? (2-4 for each main model and at 4 for joiners; you should have different number of joiners for different models; some models should have no joiners at all)

#### Day labs list
- Catch up on previous labs

#### Homework Labs
**TOP PRIORITY: Code Challenge Practice Labs** ⭐️⭐️⭐️

Metaprogramming In Ruby: all

Configuring Ruby Applications: all

---

## Week 2 Schedule

Week two of every module is usually marked by two very important events: a code challenge and the beginning of the project week. 
The days before the code challenge are calmer lab-wise. It is all about solidifying what you have learned so far, discovering new blank spots and asking more of the clarifying questions. Then, you have a code challenge and individual personalized feedback and a few days later you start the project week. 
In Mod1 Week2 you will:
- solidify what you learned in Mod1 Week1;
- practice with different prompts;
- learn about inheritance in Ruby;
- write some SQL;
- set up your first databases;
- become familiar with ActiveRecord design pattern and use ActiveRecord gem for database management;
- create non-trivial domain models;
- get to know who your partner and deliverables are for the project week;

### W2 Monday

| Time | Activity |
| - | - |
|9:00 - 9:30| Take attendance on Slack |
|9:00 - 12:30| Day Labs |
|12:30 - 1:30| Lunch break|
|1:30 - 3:30| Mock Code Challenge |
|3:30 - 4:00| Break for breathing |
|4:00 - 5:30| Small group review of the Mock Code Challenge |
|5:30 - 6:00| Stand down |


#### Self-check questions
- Can I explain what I am doing when writing code for a deliverable?

#### Day labs list
- Catch up on previous labs

#### Homework Labs
- Take a good night sleep

### W2 Tuesday

| Time | Activity |
| - | - |
9:00 - 9:30 Take attendance on Slack 
9:00 - 10:00 Day labs, or last moments to practice and grab coffee 
10:00 - 12:00 Code Challenge
12:00 - 12:30 Day labs, or a breathing break 
12:30 - 1:30  Lunch break
1:30 - 3:30 Day labs & feedbacking 
3:30 - 5:00 Lecture: SQL 
5:00 - 6:00 Homework Labs 

#### Self-check questions
- What are primary keys? What are foreign keys? How are they related with one another?
- What is the purpose of SQL?
- Why do we need to use databases?
- How do we CRUD on rows of a table?

#### Day labs list
Getting Started With SQL
- Introduction To Getting Started With SQL
- **What Is SQL** ⭐️
- **SQL Intro And Installation** ⭐️
- **SQL Database Basics** ⭐️
- **SQL Databases And Text Editors** ⭐️
- SQL Data Types
- **SQL Inserting, Updating, Selecting And Deleting** ⭐️
- **Basic SQL Queries** ⭐️
- **Grouping And Sorting Data** ⭐️
- **SQL Bear Organizer Lab** ⭐️
- SQL Aggregate Functions
- SQL Aggregate Functions Lab
- **SQL Quiz** ⭐️
- **Getting Started With SQL Bookend** ⭐️

#### Homework Labs
Table Relations With SQL:
- Introduction To Table Relations With SQL
- Edgar Codd And Table Relations
- Table Relations
- **SQL JOINS** ⭐️
- **SQL Join Tables** ⭐️
- SQL Crowdfunding Lab
- SQL Complex Joins
- Sql Relations Quiz
- Table Relations With SQL Bookend

Topics In OO - Object Inheritance In Ruby:

- Introduction To Object Inheritance In Ruby
- **Intro To Inheritance** ⭐️
- **Intro To Inheritance Lab** ⭐️
- Intro To Modules
- Intro To Modules Lab
- **Super** ⭐️
- **Super Lab** ⭐️
- **Object Inheritance Quiz** ⭐️
- **Object Inheritance Bookend** ⭐️

---

## Code Challenge Rubric
​
### Build classes using OO Ruby Syntax
​
1. Class code has a syntax or runtime error. Code does not run at all, or exits with an error, or most Object-oriented deliverables are not implemented.
2. No syntax errors. Some deliverables function correctly. Mixes up syntax for class and instance methods, refers to variables in the wrong scope, or uses `self` incorrectly, leading to logical errors. Method and variable names do not correspond to their respective behavior or data types. Methods might be duplicated, or code includes unused methods without a clear purpose.
3. Correct class syntax for the deliverables submitted. May be incomplete or missing deliverables. Most code generally expresses intent: method and variable names match their behaviors and data types. Methods are not duplicated. Code does not have unused or methods without a clear purpose.
4. Correct class syntax for all of the submitted code. Code express intent: method and variable names indicate their behavior and data types. Some deliverables might not be complete. No methods are duplicated.
5. Correct class syntax for all deliverables, all deliverables complete. Code expresses intent: method and variable names indicate their behavior and data types, with the correct pluralization. No methods are duplicated. All methods have a clear purpose. Shared functionality is factored out into helper methods. Appropriate use of attr\_\* macros.
​
### Model relationships using Ruby
​
1. Submitted code does not relate models to each other through methods or data.
2. Models relate to each other, but incompletely. Relationship methods are missing or have logic errors, store data on the wrong model, or are missing a single source of truth.
3. Models relate to each other as specified in the instructions. Data is stored on the correct models, relationship methods are defined on the right models, and the logic correctly implements the relationships. Aggregate methods using the relationships may be incomplete or have errors.
4. Models relate to each other as specified in the instructions. Aggregate methods work, but might not use helper methods effectively.
5. Models relate to each other as specified in the instructions. Aggregate methods use helper methods effectively.
​
### Solve problems with collections of data
​
1. Does not attempt to solve collections problems, or has syntax errors in collection code.
2. Collections methods have runtime or logic errors. Collections methods may use the wrong iterators, have incorrect logic, or many of the collections methods are unimplemented.
3. Some collections methods work correctly, though several might be unimplemented. Code may not use the appropriate built in method for each problem, or duplicate logic instead of using helper methods.
4. All collections methods are implemented and function correctly. Most use appropriate higher-level built-in methods. Methods may duplicate logic instead of using helper methods.
5. All collections methods implemented and function correctly, using appropriate higher-level built-in methods. Shared logic is factored out to helper methods.

---

## Terminology



[lecture-link]: https://flatironschool.zoom.us/j/92799283768?pwd=L20xVmc5VGFzUGRMcFRPaDdVazIzdz09
[pairing-contract-link]: https://docs.google.com/document/d/1ce3zFnY_z3VoVQNmpqQHt1Bm00l8HThioPubD80Haq4/edit?usp=sharing
[pairing-feedback-link]:  https://forms.gle/UWhEn24JATkV3M6r9
