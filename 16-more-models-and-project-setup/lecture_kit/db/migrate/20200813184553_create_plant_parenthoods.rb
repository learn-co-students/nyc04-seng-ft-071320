class CreatePlantParenthoods < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_parenthoods do |t|
      t.integer :person_id
      t.integer :plant_id
      t.integer :affection
      t.boolean :favorite?
    end
  end
end
