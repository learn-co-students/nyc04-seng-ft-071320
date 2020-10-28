class CreateBurgerOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :burger_orders do |t|
      t.belongs_to :burger, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
