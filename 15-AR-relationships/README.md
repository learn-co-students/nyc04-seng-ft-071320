Active Record Relationships
---

## Post lecture
Here's <a href="https://flatironschool.zoom.us/rec/play/u8csd-CtqDI3TobG4QSDBP4qW42-J6ys1yAfq_oFxE-yUiRSYFSvN7JHNudYc4jRFXBtF_Xcp2AbPPkN?autoplay=true&startTime=1597341766000"> the lecture video </a>
Here's <a href="https://github.com/learn-co-students/nyc04-seng-ft-071320/blob/master/10-one-to-many/W2-Thu.txt"> the lecture chat </a>

## SWBATs
- [ ] Build on the knowledge of OO Ruby associations to use them in AR
- [ ] Draw an ERD prior to coding
- [ ] Design domain model thoughtfully
- [ ] Remember that it is the joiner's responsibility to know about the other's `id`s
- [ ] Become comfortable with the syntax of the association macros (`belongs_to`, `has_many`, `has_many through`) 
- [ ] Understand that macros give us methods but the associations happen in the database

### Outline
* Review what we covered so far:
    - What is AR?
      - MAGIC!!!!!!!!!!
      - a bridge/interpreter between the SQL world and the Ruby Lalaland
      - orm
      - gem -> extension
      - design pattern
    - What does AR do?
      - a bridge/interpreter between the SQL world and the Ruby Lalaland
      - it creates associations between models and tables/database
    - When to use SQL and when AR?
      - up to you but in the project week use AR
    - What's the difference between a model and a table?
      - model/class -> objects/instances
      - table -> stores the data
    - Can a database have many tables?
      - YES! As many as you **need**
    - What is meant by migration?
      - migration is a blueprint for ActiveRecord to create/change/delete SQL tables
    - Naming conventions in Ruby and AR
      - model name: singular 
      - everything else: plural
    - Project file structure
    - What is `rake`?
      - it's a gem
      - task manager
      - allows us to automate tasks
    - What is `rake console`?
      - one of the rake tasks
      - similar to pry 
      - it calls on PRY.start -> it knows about our whole app and the database
      - SUPERPRY!!!
    - Difference between `.new` and `.create`
      - `.new` -> creates a RUBY instance and then you need to use `.save` in order for it to persists in the database
      - `.create` -> new+save
    - What is CRUD and what are the examples of methods for each letter?
      - CRUD -> acronym that stands for "create read update delete"
      - create: .create
      - read: 
          - find_by -> accepts a hash (key-value pair) and we perform a search based on an attr
          - find -> based on id
      - update: .update (both on an instance and a class)
      - delete: .destroy (both on an instance and a class)

### Setting up relationships

This is our domain model:

```
Plant —————< PlantParenthood >————————— Parent
:name       :affection (int)         :name
:color      :favorite(bool)          :free_time
:bought(date)                        :age
```

- How can we associate a Person with a Plant and vice-versa?

Let's first create the association between Parent and PlantParenthood. **Since It's the PlantParenthood that has the chicken feet on itself, this is the model that should contain the instance ides of others.**

```ruby
class PlantParenthood < ActiveRecord::Base
  def people
    # Person.all.find{ |person| person.id == self.person_id }
    # OR use AR .find
    Person.find(self.person_id )
  end
end
#...
class Person < ActiveRecord::Base
  def plant_parenthoods
    # PlantParenthood.all.select{|pp| pp.person_id == self.id}
    # OR use AR .where
    PlantParenthood.where(person_id: self.id)
  end
end
```

## What About a Better Way™️

- ActiveRecord Macros
  - PlantParenthood model: `belongs_to :plant`, `belongs_to :person`
  - Plant model `has_many :plant_parenthoods`
  - Person model `has_many :people`
- These macros provide **even more** methods, like `plant_instance.person` and `person_instance.plants`
  - **Major Key🔑**––since a `plant_parenthood` instance BELONGS TO a `person` it should have ONE Person. Therefore the method is `.person`. A person HAS MANY `plant_parenthoods`, therefore the method is `.plant_parenthoods` pay attention to what is singular and what is plural.

### Important Methods from ActiveRecord

- `Model.new`
  - creates a new **RUBY** instance in local memory without persisting to the database
- `Model#save`
  - inserts or updates a **RUBY** instance to the db
- `Model.create`
  - `Model.new` + `Model#save`
  - A class method that creates a new **RUBY** instance AND saves it to the database
- `Model.all`
  - returns all instances (we wrote this by hand a million times)
- `Model.first`
  - instance with the lowest ID in the db
- `Model.find`
  - Finds a record by id and returns a Ruby instance––`Plant.find(1)` returns the plant with an id of 1
- `Model.find_by({ attribute: value })`
  - can find by one attribute-value pair or multiple
  - `Plant.find_by(name: 'Angel's prayer')` will return the plant with a name of 'Angel's prayer'

[Active Record Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-up-down-methods)
