class SnackSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :vote
  has_many :comments
end
