class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :landmark
    
    validates_uniqueness_of :landmark_id, scope: :user_id
end
