class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price
end
