class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.datetime :date
      t.string :reason
      t.integer :dog_id
      t.integer :vet_id
    end
  end
end
