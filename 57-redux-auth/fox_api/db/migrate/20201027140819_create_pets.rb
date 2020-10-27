class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :fox, null: false, foreign_key: true
      t.string :nickname
      t.integer :health

      t.timestamps
    end
  end
end
