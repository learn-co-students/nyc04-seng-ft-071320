class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :storeName
      t.integer :orders, default: 0

      t.timestamps
    end
  end
end
