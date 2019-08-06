class Stop < ApplicationRecord
    belongs_to :walk 
    belongs_to :landmark
end
