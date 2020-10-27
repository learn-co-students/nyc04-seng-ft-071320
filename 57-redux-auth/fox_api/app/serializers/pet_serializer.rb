class PetSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :health, :fox_id
end
