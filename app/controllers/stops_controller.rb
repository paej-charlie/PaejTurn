class StopsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]
    
    def index 
        @stops = Stop.all
        render json: @stops
    end 
    
end
