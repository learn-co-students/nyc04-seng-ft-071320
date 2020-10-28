class CreateFoxes < ActiveRecord::Migration[6.0]
  def change
    create_table :foxes do |t|
      t.string :species
      t.string :image

      t.timestamps
    end
  end
end
