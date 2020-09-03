class StudentsController < ApplicationController
  before_action :get_student, only: [:show, :edit, :update, :destroy]

  def login
    @error = flash[:error]
  end

  def handle_login
    @student = Student.find_by(first_name: params[:first_name])

    if @student && @student.authenticate(params[:password])
      # If the student is found AND their password matches
      redirect_to student_path(@student)
    else
      flash[:error] = "Incorrect username or password"
      redirect_to login_path
    end
  end

  def index
    @students = Student.all
  end

  def new
    @errors = flash[:errors]
    @student = Student.new
  end
  
  def create
  @student = Student.create(student_params)
    if @student.valid?
      redirect_to students_path
    else 
      flash[:chicken] = ["taco"]
      flash[:errors] = @student.errors.full_messages
      redirect_to new_student_path
    end
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
    params.require(:student).permit(:first_name, :last_name, :age, :password)
  end

end