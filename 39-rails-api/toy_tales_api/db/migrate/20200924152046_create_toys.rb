class CreateToys < ActiveRecord::Migration[6.0]
  def change
    create_table :toys do |t|
      t.string :name
      t.string :image
      t.integer :likes

      t.timestamps
    end
  end
end
