class BookListSerializer < ActiveModel::Serializer
  attributes :id, :book
  has_one :reading_list
  has_one :book
end
