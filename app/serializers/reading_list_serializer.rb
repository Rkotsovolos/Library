class ReadingListSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
  has_many :book_lists
end
