class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :walks, through: :trips
  has_many :landmarks, through: :favorites
  
  validates :first_name, :last_name, :age, presence: true
end
