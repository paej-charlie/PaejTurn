class Landmark < ApplicationRecord
    has_many :walks, through: :stops
    has_many :users, through: :favorites
end
