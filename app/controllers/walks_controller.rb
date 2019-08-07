class WalksController < ApplicationController
    before_action :authenticate_user!, only: [:show]
    
    def index 
        @walks = Walk.all
        render json: @walks
    end 
    
    def show
        @walk = Walk.find params[:id]
        render json: @walk.to_json({:include => :landmarks})
    end 
    
end
