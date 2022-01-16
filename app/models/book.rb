class Book < ApplicationRecord

    has_many :notes
    has_many :users, through: :notes

    has_many :list_books
    has_many :reading_lists, through: :list_books

    
end
