class Walk < ApplicationRecord
    has_many :stops
    has_many :trips
    has_many :users, through: :trips
    has_many :landmarks, through: :stops
    
    validates_uniqueness_of :name
end
