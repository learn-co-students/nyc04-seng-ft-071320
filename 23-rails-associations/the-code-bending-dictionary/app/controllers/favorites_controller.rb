class FavoritesController < ApplicationController

    def new
        @favorite = Favorite.new
        @students = Student.all
        @words = Word.all
    end

    def create
        # byebug
        favorite_params = params.require(:favorite).permit(:priority_level, :student_id, :word_id)
        @favorite = Favorite.create(favorite_params)

        student = Student.find(params[:favorite][:student_id])

        redirect_to student_path(student)
    end

end
