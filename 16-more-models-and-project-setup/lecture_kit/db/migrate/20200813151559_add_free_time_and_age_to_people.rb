class AddFreeTimeAndAgeToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :free_time, :string
    add_column :people, :age, :integer
  end
end
