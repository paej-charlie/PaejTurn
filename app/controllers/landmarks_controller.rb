class LandmarksController < ApplicationController
    before_action :authenticate_user!, only: [:show ]
    
    def index 
        @landmarks = Landmark.left_outer_joins(:favorites).select('landmarks.*, favorites.*').where(favorites: {user_id: current_user}).or(Landmark.left_outer_joins(:favorites).select('landmarks.*, favorites.*').where(favorites: {user_id: nil}))
        render json: @landmarks
    end 
end
