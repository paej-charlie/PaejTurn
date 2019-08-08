class Landmark < ApplicationRecord
    has_many :walks, through: :stops
    has_many :users, through: :favorites
    
    validates_uniqueness_of :title
    validates :latitude, :longitude, presence: true
end
