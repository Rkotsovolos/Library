class CreateListBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :list_books do |t|
      t.string :list_name
      t.references :book
      t.references :reading_list

      t.timestamps
    end
  end
end
