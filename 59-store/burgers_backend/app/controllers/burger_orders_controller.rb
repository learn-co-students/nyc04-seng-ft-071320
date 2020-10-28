class BurgerOrdersController < ApplicationController
    def create
        bo = BurgerOrder.create(b_order_params)
        render json: bo
    end

    def b_order_params
        params.permit(:order_id, :burger_id)
    end
end
