class ListBookSerializer < ActiveModel::Serializer
  attributes :id, :list_name
  has_one :user
  has_many :books
end
