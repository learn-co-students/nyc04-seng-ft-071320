class OrderSerializer < ActiveModel::Serializer
  attributes :id, :checked_out, :total, :nice_timestamp
  has_many :burger_orders
end
