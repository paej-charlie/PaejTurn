class Walk < ApplicationRecord
    has_many :users, through: :trips
    has_many :lankmarks, through: :stops
    
    validates_uniqueness_of :name
end
