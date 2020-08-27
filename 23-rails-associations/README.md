# CRUD in Rails

## Table of contents
- [Learning Goals 📚](#learning-goals)
- [Self-check after-lecture questions 🧐](#self-check-after-lecture-questions)
- [Outline 🗺](#outline)
- [Helpful Bookmarks 🤓](#helpful-bookmarks)
- [Our App ERD ⿻](#our-app-erd)
- [Rails Commands Reference 👾](#rails-commands-reference)
- [Refactoring Controllers 🕹](#refactoring-controllers)
  - [Before 🛫](#before)
  - [Mid-way ✈](#midway)
  - [After 🛬](#after)
- [Dropdown with `collection_select` 🥇🥈🥉](#dropdown-with-collection_select)
- [Rails process for labs 🌮](#rails-process-for-labs)

---

## Learning Goals
- Set up ActiveRecord associations on models in Rails
- Use data from the associations in view files
- Render a dropdown `<select>` tag in a form using the `collection_select` helper
- Handle deleting an instance of a model that has other records associated using `dependent: :destroy`

---

## Outline
- [ ] Add an additional model (joiner) to our domain
  - [ ] Create relationship using ActiveRecord
  - [ ] Use information from the association in our views
  - [ ] Make a create form for the new model with a dropdown
  - [ ] Update our delete method from the first model

---

## Self-check after-lecture questions
Please read these questions carefully **before** the lecture so that you will know what to pay attention to **during** the lecture.

1. What is `rails g resource` and what does it create?
2. How is `student:belongs_to` better than `student_id:integer` when using a generator?
3. Which side of the association do we need to fill out in the model when using a generator?
4. What arguments do we pass into `collection_select`? What arguments do we pass into `f.collection_select`?
5. What does `before_action` do?
6. Which two actions can we skip if we use `before_action`?
7. If we want the relationship instances always appear in a certain order, where would I do that?
8. How can I ensure that I will be able to delete a Student instance if Favorite instances depend on it?

---

## Helpful Bookmarks
- [slide deck](https://docs.google.com/presentation/d/1nvHO7oUfWKUgU3qF25couGCIJuNaHAkvTWGzfernVKQ/edit?usp=sharing)
- [cheat sheet for forms](http://devhints.io/rails-forms)

---

## Our app ERD

![ERD](ERD.png)

---

## Rails Commands Reference
* `rails new <app-name>` - create a new Rails app
* `rails c` - open a console
* `rails s` - start server
* `rails g migration <migration-name> <attribute:data-type> <attribute:data-type>` - generate a migration
* `rails g model <model-name> <attribute:data-type> <attribute:data-type>` - generate a model and a migration to create the table with specified columns
* `rails g controller <model-name-pluralized>` - generate a controller
* `rails g resource <model-name>` - generate a controller, a model, a migration, routes and views
* `rails routes` - display all the routes in your app, also can viewed at http://localhost:3000/rails/info/routes
* `rails db:migrate` - run all pending migrations (same as `rake db:migrate` in Mod 1)

---

## Refactoring Controllers

The way we have been writing our controllers code is very readable but also quite redundant. Let's refactor it. First, let's have a look at how our controllers look now:

### Before
In the code below, you can see that we are not making use of the implicit rendering (meaning, Rails knows which view file to render if it's the same as the action name), we are repeating `student_params` twice and `Student.find` four times.

```ruby
class StudentsController < ApplicationController

  # get '/students'
  def index
    # digesting the request: checking in with the model to get the student array
    @students = Student.all
    # response: render an index view
    render :index
  end

  # get '/students/new'
  def new
    # digesting the request: creating an empty template for the form
    @student = Student.new
    # response: render new form view
    render :new
  end
  
  # post '/students'
  def create
    # digesting the request: going through the params hash and checking in with the model to create a new instance
    student_params = params.require(:student).permit(:first_name, :age, :last_name)
    @student = Student.create(student_params)
    # response: redirect to the '/students', which will trigger the index action
    redirect_to students_path
  end

  #get '/students/:id/
  def show
    # digesting the request: finding a student in a model
    @student = Student.find(params[:id])
    # response: render show view
    render :show
  end

  # get '/students/:id/edit'
  def edit
    # digesting the request: crompiling data for the form from the model
    @student = Student.find(params[:id])
    # response: render edit form view
    render :edit
  end

  # patch '/students/:id'
  def update
    # digesting the request: going through the params hash and checking in with the model to update a the instance
    @student = Student.find(params[:id])
    student_params = params.require(:student).permit(:first_name, :age, :last_name)
    @student.update(student_params)

    # response: redirect to the '/students/:id', which will trigger the show action
    redirect_to student_path(@student)
  end

  # delete '/students/:id"
  def destroy
    # digesting the request: checking in with the model to find a student instance and destroy it
    @student = Student.find(params[:id])
    @student.destroy(params[:id])
    #response: redirect to the index page
    redirect_to students_path
  end

end
```

### Midway
Let's now take out the explicit rendering lines and comments because since we are following the convention, other Rails devs will know which action corresponds to which url and request type.

```ruby
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end
  
  def create
    student_params = params.require(:student).permit(:first_name, :age, :last_name)
    @student = Student.create(student_params)
    redirect_to students_path
  end

  def show
    @student = Student.find(params[:id])
  end

def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    student_params = params.require(:student).permit(:first_name, :age, :last_name)
    @student.update(student_params)
    redirect_to student_path(@student)
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy(params[:id])
    redirect_to students_path
  end

end
```

Now, let's create a **helper method** that will tackle the question of dealing with strong params. We will make it a **private** method so it cannot be accessed by any code outside of the controller. Now, `student_params` is not a local variable but a method:

```ruby
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end
  
  def create
    @student = Student.create(student_params)
    redirect_to students_path
  end

  def show
    @student = Student.find(params[:id])
  end

def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    @student.update(student_params)
    redirect_to student_path(@student)
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy(params[:id])
    redirect_to students_path
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :age, :last_name)
  end

end
```

The final quest of our dinner will be the `before_action` macro. It does what it sounds like: before an action in the controller is called up, this method will fire up. Steps to implement it:
1. write a helper method (in our case, it will be a private `get_student` method)
2. write `before_action` macro
3. specify which actions it concerns (in our case, it will be `edit`, `update`, `show` and `destroy`)

This code tells Rails: 
> before you run the show, edit and update actions, run the set_student method.

This is a helpful pattern for DRYing up our code and reusing logic across our controller actions.


```ruby
class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end
  
  def create
    @student = Student.create(student_params)
    redirect_to students_path
  end

  def show
  end

  def edit
  end

  def update
    @student.update(student_params)
    redirect_to student_path(@student)
  end

  def destroy
    @student.destroy(params[:id])
    redirect_to students_path
  end

  private

  def get_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.require(:student).permit(:first_name, :age, :last_name)
  end

end
```

Et, voila! However, now we have two "empty" methods (`show` and `edit`)... if only we could do something about them...

### After
... Yay. We can skip our empty methods!

```ruby
class StudentsController < ApplicationController
  before_action :get_student, only: [:show, :edit, :update, :destroy]

  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end
  
  def create
    @student = Student.create(student_params)
    redirect_to students_path
  end

  def update
    @student.update(student_params)
    redirect_to student_path(@student)
  end

  def destroy
    @student.destroy
    redirect_to students_path
  end

  private
  def get_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.require(:student).permit(:first_name, :last_name, :age)
  end

end
```

## Dropdown with collection_select

If we wanted to give a user the ability to create a new Favorite in our application, they would need some way of selecting the `student_id` for the associated Student (since a Favorite belongs to a Student). In Sinatra, we showed that the `<select>` tag gives our users a nice interface to work with rather than using an input field to type in a student id number:

```html
<select name="car_id">
  <option value="1">Volvo</option>
  <option value="2">Saab</option>
  <option value="3">Mercedes</option>
  <option value="4">Audi</option>
</select>
```

In Rails, there's a helper method for building out `<select>` tags called `collection_select`. You can use it with `form_for` like this:

```ruby
<!--app/views/favorites/new.html.erb-->
<%= form_for @favorites do |f| %>
  <%= f.collection_select :student_id, @students, :id, :first_name %>
  <%= f.submit %>
<% end %>
```

In the above example, the collection_select will iterate over each instance of a student in the `@students` variable to generate the `<option>` tags within our select tag, using `student.id` for the value and the `student.fisrt_name` as the text to display to the Student. It would generate the following HTML for a select tag:

```html
<select name="favorite[student_id]" id="favorite_student_id">
  <option value="1">Annie</option>
  <option value="2">Eric</option>
  <option value="3">Isabel</option>
  <option value="4">Nunny</option>
</select>
```

The selected value of the dropdown would come through in the params under `params[:favorite][:student_id]` so we can use it to create a new instance of a Lab and associate it with the student selected in the dropdown.

More Info: [collection_select (ActionView::Helpers::FormOptionsHelper) - APIdock](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select)

--- 

## Rails process for labs
I remember that what helped me in my code challenge was developing a structure/habit in approaching a lab. I’d encourage you to develop one for yourself if you stress out or feel overwhelmed. Write a step-by-step instruction for yourself and do three labs following the steps. For instance, here are the steps that helped me pass&finish fast:
1. `git clone, bundle install`
2. While your terminal is doing the job, read the instruction.
3. ON A WHITEBOARD: draw the models, draw the associations (does it need a join model?), write what each model needs (columns), mark validations and views
NOW only you’re starting to code. Create models (`rails g model`). I’d also copy/paste instructions for each model from the read me. If you feel like a task is super confusing, put it at the bottom of the list so that you get to it at the end (5/6 tasks done is better than being stuck for 40 minutes in panic)
4. Add association macros and validations in models
5. Create and run migrations: `rails db:create`, `rails db:migrate`
6. Write seed data just to check associations (I’d say, three instances of each class but only 2 for a joiner; in each of the classes, there should be one instance without connection)
7. `rails db:seed`
8. In `rails console`: try to access instances of different classes through associations:
- check whether your seeds exist (e.g. `Student.all or Student.first`)
- check whether associations work (e.g. `Student.first.words` would check for all student's my words and and `Student.first.words.first.definitions.first.content`  would check the first student's first word's first definition's content)
- check validations: try to create a student with incomplete required stuff and then checks if it went to your database (e.g. `Student.last`) — if it did, you check your validations
9. check which routes you’d need, go to `config/routes.rb`, write up the correct routes
10. create controllers (`rails g controller students`) and fill them up with the actions that are in accordance with the routes and the readme
11. create views that are required from you by the readme
12. fire up the server: `rails s`
13. go have fun with your page — try to break it!
**AND OF COURSE YOU DON’T HAVE TO FOLLOW THIS!** My point is only that for me it felt overwhelming and I developed a structure/habit that helped me not panic and not forget to e.g. test!