class PetsController < ApplicationController
    before_action :authorized, only: [:create]

    def create
       @pet = @user.pets.create(pet_params)
        # @pet = Pet.create(pet_params.merge({user_id: @user.id}))   
       render json: @pet
    end


    def pet_params
        params.permit(:fox_id, :nickname, :health)
    end

end
