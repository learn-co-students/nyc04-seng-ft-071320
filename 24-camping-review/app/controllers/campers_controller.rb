class CampersController < ApplicationController

    def index
        @campers = Camper.all
    end

end
