class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :trips
  has_many :favorites
  has_many :walks, through: :trips
  has_many :landmarks, through: :favorites
  
  validates :first_name, :last_name, presence: true
end
