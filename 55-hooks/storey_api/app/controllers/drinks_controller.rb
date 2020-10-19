class DrinksController < ApplicationController

    def create
        @drink = Drink.create(params.permit(:name, :store_id))
        render json: @drink
    end

end
