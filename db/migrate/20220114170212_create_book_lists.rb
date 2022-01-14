class CreateBookLists < ActiveRecord::Migration[6.1]
  def change
    create_table :book_lists do |t|
      t.references :book, null: false, foreign_key: true
      t.references :reading_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
