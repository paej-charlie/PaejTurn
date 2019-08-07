class Walk < ApplicationRecord
    has_many :users, through: :trips
    has_many :lankmarks, through: :stops
end
