class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :user_name
      t.string :comment_content
      t.integer :snack_id
      t.timestamps
    end
  end
end
