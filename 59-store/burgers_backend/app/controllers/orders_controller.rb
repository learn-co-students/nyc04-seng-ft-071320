class OrdersController < ApplicationController

    before_action :authorized

    def transform
        current_cart = @user.orders.find(params[:id])
        current_cart.update(checked_out: true)
        new_cart = @user.orders.create(checked_out: false)
        render json: {
            current_cart: OrderSerializer.new(new_cart),
            transformed_cart: OrderSerializer.new(current_cart)
        }
    end
end
