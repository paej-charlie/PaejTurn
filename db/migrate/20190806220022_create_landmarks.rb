class CreateLandmarks < ActiveRecord::Migration[5.2]
  def change
    create_table :landmarks do |t|
      t.string :title
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.boolean :alcohol
      t.string :latitude
      t.string :longitude
      t.string :image

      t.timestamps
    end
  end
end
