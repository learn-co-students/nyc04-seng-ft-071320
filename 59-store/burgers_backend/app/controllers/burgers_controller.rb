class BurgersController < ApplicationController
    
    def index
        @burgers = Burger.all
        render json: @burgers
    end
    
end
