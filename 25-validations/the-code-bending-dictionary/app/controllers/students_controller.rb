class StudentsController < ApplicationController

    # get "/students"
    def index
        # digesting the request: it reaches out to the model to get an array of all students
        @students = Student.all

        # response: render the index view file
        render :index
    end

    # get "students/new"
    def new
        # digesting the request: we will prepare a template of a Student instance
        @student = Student.new

        # response: render new form file
        render :new
    end

    # post "/students"
    def create
        # byebug
        # digesting the request: working with params
        student_params = params.require(:student).permit(:first_name, :last_name, :age)
        @student = Student.create(student_params)

        #response: redirect to index page
        # redirect_to students_path
        #response: redirect to show page
        redirect_to student_path(@student)
    end

    # get "/students/:id"
    def show
        # digesting the request: it reaches out to the model to get a specific Student instance
        @student = Student.find(params[:id])

        # response: render the show view file 
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

  def destroy
    # digesting the request: checking in with the model to find a student instance and destroy it
    @student = Student.find(params[:id])
    Student.destroy(params[:id])
    #response: redirect to the index page
    redirect_to students_path
  end


end
