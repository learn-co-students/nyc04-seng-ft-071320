class CreateClassrooms < ActiveRecord::Migration[6.0]
  def change
    create_table :classrooms do |t|
      t.string :name
      t.belongs_to :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
