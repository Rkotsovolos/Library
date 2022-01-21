class ReadingList < ApplicationRecord
    belongs_to :user
    has_many :book_lists, dependent: :destroy
    has_many :books, through: :book_lists
    
end
