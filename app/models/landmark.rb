class Landmark < ApplicationRecord
    has_many :stops
    has_many :favorites
    has_many :walks, through: :stops
    has_many :users, through: :favorites
        
    validates_uniqueness_of :title
    validates :latitude, :longitude, presence: true
    
    attr_accessor :is_favorite
end
