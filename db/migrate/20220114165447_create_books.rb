class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :image
      t.integer :page_count

      
      t.timestamps
    end
  end
end
