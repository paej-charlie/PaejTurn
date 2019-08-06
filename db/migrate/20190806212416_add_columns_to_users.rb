class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :age, :boolean
    add_column :users, :latitude, :string
    add_column :users, :longitude, :string
  end
end
