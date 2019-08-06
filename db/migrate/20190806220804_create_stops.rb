class CreateStops < ActiveRecord::Migration[5.2]
  def change
    create_table :stops do |t|
      t.integer :landmark_id
      t.integer :walk_id

      t.timestamps
    end
  end
end
