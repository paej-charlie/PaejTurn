class AddImageToWalks < ActiveRecord::Migration[5.2]
  def change
    add_column :walks, :image, :string
  end
end
