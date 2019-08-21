class CreateSnacks < ActiveRecord::Migration[5.2]
  def change
    create_table :snacks do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :vote, default: 0
      t.timestamps
    end
  end
end
