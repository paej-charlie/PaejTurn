class UpdatesToWalksAndLandmarks < ActiveRecord::Migration[5.2]
  def change
    change_table :walks do |t|
      t.rename :length, :distance
      t.rename :type, :style
    end 
    
    add_column :walks, :directions, :text
    add_column :landmarks, :description, :text
  end
end
