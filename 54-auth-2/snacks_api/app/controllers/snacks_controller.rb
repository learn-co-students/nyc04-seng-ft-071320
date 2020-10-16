class SnacksController < ApplicationController

    before_action :authorized, only: [:create]

    def create
       @snack = @user.snacks.create(snack_params)
       render json: @snack
    end


    private
    def snack_params
        params.permit(:name)
    end
end
