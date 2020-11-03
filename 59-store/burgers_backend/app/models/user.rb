class User < ApplicationRecord
    has_secure_password

    has_many :orders

    def current_cart_pls
        current_cart = self.orders.find_or_create_by(checked_out: false)
        OrderSerializer.new(current_cart)
    end


    def past_orders_plz
        all_past_orders = self.orders.where(checked_out: true)
        all_past_orders.map do |order|
            OrderSerializer.new(order)
        end
    end

end
