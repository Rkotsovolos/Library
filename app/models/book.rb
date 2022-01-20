class Book < ApplicationRecord

    has_many :notes
    has_many :users, through: :notes

    has_many :books_lists
    has_many :reading_lists, through: :books_lists

    
end
