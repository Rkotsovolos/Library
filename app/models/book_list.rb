class BookList < ApplicationRecord
    
    belongs_to :reading_list   
    belongs_to :book
    
end
