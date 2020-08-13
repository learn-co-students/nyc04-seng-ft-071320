$adding_table = [
    {
        name: "in the rake console check the plural form of the noun you use in your model", 
        code: "'noun'.pluralize"
    },
    {
        name: "create a migration file", 
        code: "rake db:create_migration NAME=create_plural_form_of_the_noun"
    },
    {
        name: "check whether the migration file has been created in the db/migrate", 
        code: ""
    },
    {
        name: "open the migration file and using the create_table method, specify the table columns", 
        code: "create_table(:name_of_the_table)"
    },
    {
        name: "tell ActiveRecord to act on this migration blueprint -- to create a table in your database", 
        code: "rake db:migrate"
    },
    {
        name: "check the migration status", 
        code: "rake db:migrate:status"
    },
    {
        name: "create the model file with a class name corresopnding to the table (but singular)", 
        code: "class Noun end"
    },
    {
        name: "connect the class name to ActiveRecord", 
        code: "class Noun < ActiveRecord::Base"
    },
    {
        name: "get instructions to create new instances", 
        code: "rake remind_me_about:creating_instances"
    }
]

$adding_column = [
    {
        name: "create a migration file", 
        code: "rake db:create_migration NAME=add_column_to_name_of_the_table"
    },
    {
        name: "check whether the migration file has been created in the db/migrate", 
        code: ""
    },
    {
        name: "open the migration file and using the add_column method, add columns", 
        code: "add_column(:name_of_the_table, :name_of_the_column, :datatype)"
    },
    {
        name: "tell ActiveRecord to act on this migration blueprint -- to create a table in your database", 
        code: "rake db:migrate"
    },
    {
        name: "check the migration status", 
        code: "rake db:migrate:status"
    }
]

$rolling_back = [
    {
        name: "check the migration status", 
        code: "rake db:migrate:status"
    },
    {
        name: "decide how many migrations you need to rollback and rollback", 
        code: "rake db:rollback STEP=number_of_migrations"
    },
    {
        name: "check the migration status", 
        code: "rake db:migrate:status"
    }
]

$creating_instance = [
    {
        name: "open rake console", 
        code: "rake console"
    },
    {
        name: "create a new instance by invoking '.new' method and passing a hash an argument", 
        code: "variable = Noun.new(attribute: 'some string', attribute: 'some integer')"
    },
    {
        name: "save it to the database", 
        code: "variable.save",
        note: "you can replace new+save with .create"
    },
    {
        name: "check if it was created", 
        code: "Noun.last"
    },
    {
        name: "exit console", 
        code: "exit"
    },
]

$reading_instances = [
    {
        name: "open rake console", 
        code: "rake console"
    },
    {
        name: "see all instances of a model", 
        code: "Noun.all"
    },
    {
        name: "check the first, second, third instance", 
        code: "Noun.first && Noun.second && Noun.third",
    },
    {
        name: "find an instance by id", 
        code: "Noun.find(0)"
    },
    {
        name: "find an instance by an attribute", 
        code: "Noun.where(attribute: value, another_attribute: value)"
    }
]

$updating_instance = [
    {
        name: "open rake console", 
        code: "rake console"
    },
    {
        name: "see all instances of a model", 
        code: "Noun.all"
    },
    {
        name: "find the one instance you want to change and save it to a variable", 
        code: "variable = Noun.find_by(attribute: value)",
    },
    {
        name: "update the instance by passing an argument of a hash", 
        code: "variable.update(attribute: value, another_attribute: value)"
    },
    {
        name: "make sure you updated it by reading the SQL logger and by calling the variable", 
        code: "variable"
    },
]

$deleting_instance = [
    {
        name: "open rake console", 
        code: "rake console"
    },
    {
        name: "find the one instance you want to delete and save it to a variable", 
        code: "variable = Noun.find_by(attribute: value)",
    },
    {
        name: "delete the instance", 
        code: "variable.destroy"
    },
    {
        name: "make sure you updated it by reading the SQL logger and by calling the variable", 
        code: "variable"
    },
]

$updating_instances = [
    {
        name: "open rake console", 
        code: "rake console"
    },
    {
        name: "update all instances by passing an argument of a hash", 
        code: "Noun.update(attribute: value, another_attribute: value)"
    },
    {
        name: "see the results", 
        code: "Noun.all"
    },
]

$deleting_instances = [
    {
        name: "open rake console", 
        code: "rake console"
    },
    {
        name: "delete all instances", 
        code: "Noun.destroy_all"
    },
    {
        name: "see the results", 
        code: "Noun.all"
    },
]

