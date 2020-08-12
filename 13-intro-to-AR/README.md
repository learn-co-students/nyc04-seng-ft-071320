Intro to ActiveRecord
===

## SWBATs
- [ ] Implement ActiveRecord in a project
- [ ] Practice creating migrations for updating the database structure
- [ ] Explain how `rake` works and how to run rake tasks
- [ ] Distinguish between and define "model", "class", and "table"
- [ ] Practice with `ActiveRecord::Base` instance and class methods
- [ ] Perform persistent CRUD actions on one model using ActiveRecord

### Outline
* Demonstrate Mass Assignment
  - programitcally assigning attributes when an object is initialized
* Review project setup
* Show how to use `rake` tasks
* Choose a domain and set up ActiveRecord on our models (Game >-< Player)
  * Demonstrate how to work with migration files: `migrate` and `rollback`
  * Write CRUD on a model using ActiveRecord

### Metaprogramming and Mass Assignment
Is the concept of writing code that writes code. In ruby, everything is an objectable_helper. We interact with objects by *sending messages* to them. Objects know which messages to respond to and how via the *methods* that we define in the class.

Therefore, when initializing an object in ruby, we can pass in a hash, and then iterate over the hash to Mass Assign attributes to the instance that we are creating.

```ruby
attr_accessor :attr1, :attr2, # etc...
def initialize(attribute_hash)
  attribute_hash.each do |key, value|
    self.send("#{key}=", value)
  end
end
```

### ActiveRecord

* What are the steps for setting up ActiveRecord on a model?

0. Setup the environment/connection/any gems needed

1. Create a migration
  - set of instructions in Ruby for working with a database
  - `rake db:create_migration NAME=create_plants`

2. Write migration code
  ```rb
    create_table :plants do |table_helper|
      table_helper.string(:name)
      table_helper.string(:color)
      table_helper.integer(:height)
    end
  ```

3. Run migrations
  - `rake db:migrate`
3.5 - check your migrations (look at schema.rb or `rake db:migrate:status`)

4. Connect to a model

* How can we do CRUD actions using ActiveRecord?

### Rake

Rake lets us save some set instructions we want the computer to run into a command that we can call in the terminal using `rake` ie: `rake db:create_migration NAME="create_plants"`

If we want to check what tasks we have available to us, we can do `rake --tasks` or `rake -T`

### Migrations
Migrations are ActiveRecord keeps track of database changes over time.

We specify how we want the database to change in the migration file: [docs](https://guides.rubyonrails.org/active_record_migrations.html)

* We can create migrations using `rake db:create_migration NAME="the_name_we_want`
* We can check what migrations have been run so far using `rake db:migrate:status`
* We tell ActiveRecord to apply what we wrote in the migration files to the database using `rake db:migrate`

### ActiveRecord Conventions
ActiveRecord relies heavily on naming conventions to do its metaprogramming (aka *magic*), and following those naming conventions is important if you want ActiveRecord to work as intended.

For ActiveRecord to connect between a model and a table, the model name should be *singular* and the table name should be *plural*. ActiveRecord comes with `.singularize` and `.pluralize` methods that you can call on strings to check what how to follow naming convention:

```rb
  "tweet".pluralize
  # => "tweets"

  "tweets".singularize
  # => "tweet"

  "tweets".pluralize
  # => "tweetses"

  "person".pluralize
  # => people

  "octopus".pluralize
  # => "octopi"

  "sheep".pluralize
  # => "sheep"

  "human".pluralize
  # => humen (????)
```

About ActiveRecord’s `pluralize` method and non-standard words from the English-centric perspective:
if the word is of non-English and a relatively new addition to the language or if it’s an entirely made-up word, AR will just add “s” to the end:

- “Spaghetti” is already plural but `“Spaghetti”.pluralize` gives us “Spaghettis”
- “spaghetto” is singlular but `“spaghetti”.pluralize` gives us “spaghettos”
- “pokemon” is uncountable but it’s gonna be “pokemons”
- “ąę” will be “ąęs”
and this is how pluralize deals with the right-to-left alphabets:

```ruby
“מה זה“.pluralize
=> “מה זהs\n”
```

You can override the pluralization by extending the Inflector class:
- <https://apidock.com/rails/ActiveSupport/Inflector>
- <https://flylib.com/books/en/2.44.1/understanding_pluralization_rules.html>
- <https://medium.com/@anna7/ruby-on-rails-pluralization-b3927de2ca8e>

### Methods from ActiveRecord

* `Model.new` - creates a new instance in local memory without persistence
* `Model#save` - inserts or updates instance in db
* `Model.create` - Model.new + Model#save
* `Model.all` - all instances
* `Model.first` - instance with the lowest ID in the db
* `Model.last` - instance with the highest ID in the db
* `Model.find` - find one instance by id
* `Model.find_by`(attribute: value) - can find one instance by attribute-value pair(s)
* `Model.where`(attribute: value) - can find many instances by attribute-value pair(s)
* `Model#update` - takes a hash and updates an instance in db
* `Model#destroy` - delete a row in the database
* `Model.destroy_all` - delete all rows in a table

### Resources
[ActiveRecord Basics](https://guides.rubyonrails.org/active_record_basics.html)
[ActiveRecord Migrations](https://guides.rubyonrails.org/active_record_migrations.html)
[ActiveRecord Querying](https://guides.rubyonrails.org/active_record_querying.html)