class WalksController < ApplicationController
    before_action :authenticate_user!, only: [:show]
    
    def index 
        @walks = Walk.all
        render json: @walks
    end 
    
    def show
        @walk = Walk.find params[:id]
        test = @walk.to_json({:include => :landmarks})
        puts 'banana'
        puts test
        render json: test
    end 
    
end
