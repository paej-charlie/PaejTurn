class LandmarksController < ApplicationController
    before_action :authenticate_user!, only: [:show ]
    
    def index 
        if current_user
            @landmarks = Landmark.includes(:favorites)
            @landmarks.each do |landmark|
                landmark.is_favorite = landmark.favorites.length > 0 && landmark.favorites.pluck(:user_id).include?(current_user.id)
            end
                        
            render json: @landmarks.to_json(methods: [:is_favorite])
        else
            @landmarks = Landmark.all
            render json: @landmarks 
        end 
    end 
end
