class FoxesController < ApplicationController

    def index
        @foxes = Fox.all
        render json: @foxes
    end
    
end
