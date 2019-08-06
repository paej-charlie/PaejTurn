class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer :walk_id
      t.integer :user_id
      t.text :review
      t.boolean :completed

      t.timestamps
    end
  end
end
