class WalksController < ApplicationController
    before_action :authenticate_user!, only: [:landmarks]
    
    def index 
        @walks = Walk.all
        render json: @walks
    end 
    
    def show
        @walk = current_user.walks.find params[:id]
        render json: @walk
    end 
    
    def landmarks
        @walk = Walk.find params[:id]
        render json: @walk.to_json({:include => :landmarks})
    end 
    
end
