class SignupsController < ApplicationController

    def new
        @signup = Signup.new
        @campers = Camper.all
        @activities = Activity.all
    end

    def create
        signup_params = params.require(:signup).permit(:camper_id, :activity_id, :time)
        @signup = Signup.create(signup_params)
        # OR
        # Signup.create(camper_id: params[:signup][:camper_id], activity_id: params[:signup][:activity_id])
        
        
        # redirect_to camper_path(@signup.camper)
        redirect_to @signup.camper
    end

end
