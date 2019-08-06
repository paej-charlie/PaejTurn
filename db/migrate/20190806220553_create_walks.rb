class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.string :name
      t.string :length
      t.string :duration
      t.string :type
      t.boolean :alcohol

      t.timestamps
    end
  end
end
