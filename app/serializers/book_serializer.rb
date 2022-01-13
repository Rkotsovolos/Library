class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image, :page_count
end
