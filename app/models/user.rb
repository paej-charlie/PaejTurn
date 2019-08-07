class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :walks, through: :trips
  has_many :landmarks, through: :favorites
end
