class User < ApplicationRecord
    has_secure_password

    has_many :notes
    has_many :books, through: :notes
    has_many :reading_lists

    validates :username, presence: true

end
