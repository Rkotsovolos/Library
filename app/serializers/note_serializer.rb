class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note
  has_one :user
  has_one :book
end
