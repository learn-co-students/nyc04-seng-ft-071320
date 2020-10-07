class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.belongs_to :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
