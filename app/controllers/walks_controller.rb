class WalksController < ApplicationController
    before_action :authenticate_user!, only: [:show, :create, :update, :destroy]
    
    def index 
        @walks = Walk.all
        render json: @walks
    end 
    
    def show
        @walk = current_user.walks.find params[:id]
        render json: @walk
    end 
    
    def create
        @walk = current_user.walks.create walk_params
        render json: @walk, status: 201
    end 
    
    def update
        @walk = current_user.walks.find params[:id]
        @walk.update(walk_params)
        render json: @walk
    end 
    
    def destroy
        @walk = current_user.walks.find params[:id]
        if @walk.destroy
            render json: @walk 
        else
            render json: {error: 'could not destroy'}, status: 400
        end 
    end 
    
    private
    
    def walk_params
        params.require(:walk).permit(:name, :length, :duration, :type, :alcohol)
    end 
    
end
