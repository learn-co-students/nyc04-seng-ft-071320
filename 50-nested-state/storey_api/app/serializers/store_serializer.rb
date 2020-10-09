class StoreSerializer < ActiveModel::Serializer
  attributes :id, :storeName, :orders
  has_many :drinks
end
