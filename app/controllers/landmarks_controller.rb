class LandmarksController < ApplicationController
    before_action :authenticate_user!, only: [:show ]
    
    def index 
        @landmarks = Landmark.all
        render json: @landmarks
    end 
end
