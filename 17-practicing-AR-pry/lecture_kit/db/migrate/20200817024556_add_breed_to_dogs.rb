class AddBreedToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :breed, :string
  end
end
