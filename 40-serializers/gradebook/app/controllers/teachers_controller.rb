class TeachersController < ApplicationController

    def index
        @teachers = Teacher.all
        render json: @teachers
    end
    
    def show
        @teacher = Teacher.find(params[:id])
        # render json: @instance <- Sending out all the attributes from AR of that instance
        render json: @teacher
    end

end
