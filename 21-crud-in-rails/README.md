# CRUD in Rails


## Table of contents
- [Learning Goals 📚](#learning-goals)
- [Self-check after-lecture questions 🧐](#self-check-after-lecture-questions)
- [Outline 🗺](#outline)
- [Helpful Bookmarks 🤓](#helpful-bookmarks)
- [CRUDopus 🐙](#crudopus)
- [Rails process for new actions 🌮](#rails-process-for-new-actions)
- [Rails Commands Reference 👾](#rails-commands-reference)


## Learning Goals
- Explain how routes in Rails interact with the controller
- Use ActionView helpers like `link_to`, `button_to` and `form_for` to help write HTML
- Use strong params to allow creating/updating models with mass assignment
- Create, Update and Delete with Rails

---

## Outline
- [ ] Work on CRUD, focus on routes and ActionView helpers
  - [ ] Read
    - [ ] Review `link_to` and path helpers
  - [ ] Create
    - [ ] HTML form vs `form_for`
    - [ ] Strong Params
  - [ ] Update
    - [ ] reusable `form_for`
  - [ ] Delete
    - `button_to`

---

## Self-check after-lecture questions
Please read these questions carefully **before** the lecture so that you will know what to pay attention to **during** the lecture.

1. How many arguments does the `link_to` method take in? What are these arguments?
2. What is a path helper?
3. Why `students_path` does not need an `id` but `student_path` needs one?
4. Why are there two routes needed for creating a new instance?
5. Why do we redirect?
6. What are two ways Rails prevents our app from getting hacked?
7. What method does `button_to` default to?

---

## Helpful Bookmarks
- slide deck: <https://docs.google.com/presentation/d/1nvHO7oUfWKUgU3qF25couGCIJuNaHAkvTWGzfernVKQ/edit?usp=sharing>
- [restular](http://www.restular.com/)

---

## CRUDopus

![Diagram](REST-CRUDopus-Diagram.png)

--- 

## Rails process for new actions
1. new route
2. add action in the controller
3. add a view
4. test it manually online

---

## Rails Commands Reference
* `rails new <app-name>` - create a new Rails app
* `rails c` - open a console
* `rails s` - start server
* `rails g migration <migration-name> <attribute:data-type> <attribute:data-type>` - generate a migration
* `rails g model <model-name> <attribute:data-type> <attribute:data-type>` - generate a model and a migration to create the table with specified columns
* `rails g controller <model-name-pluralized>` - generate a controller
* `rails routes` - display all the routes in your app, also can viewed at http://localhost:3000/rails/info/routes
* `rails db:migrate` - run all pending migrations (same as `rake db:migrate` in Mod 1)