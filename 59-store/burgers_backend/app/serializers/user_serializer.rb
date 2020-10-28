class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :current_cart_pls, :past_orders_plz
end
