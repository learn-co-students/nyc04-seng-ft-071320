class ApplicationController < ActionController::Base

    def eric
        @chicken = "My favorite thing is chicken"
        # render :eric 
    end

    def sylwia
        render inline: "<h1>Goodbye</h1>"
    end

end
