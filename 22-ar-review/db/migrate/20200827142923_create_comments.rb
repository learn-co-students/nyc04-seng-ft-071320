class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :blog_id
      t.string :content

      t.timestamps
    end
  end
end
