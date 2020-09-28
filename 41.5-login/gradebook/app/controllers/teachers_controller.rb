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


    def login
        @found_teacher = Teacher.find_by(name: params[:theUserNameFromFrontEnd])
        if @found_teacher
            render json: @found_teacher
        else
            render json: {error: "No teacher with that name exists"}
        end
    end

end
