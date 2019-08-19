class FavoritesController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]
    
    def index
        @favorites = Favorite.all
        render json: @favorites
    end
        
    def create
        @favorite = current_user.favorites.create favorite_params
        render json: @favorite, status: 201
    end 
    
    def destroy
        @favorite = current_user.favorites.where(landmark_id: params[:id]).first
        if @favorite && @favorite.destroy
            render json: @favorite
        else
            render json: {error: 'could not destroy'}, status: 400
        end 
    end 
    
    private
    
    def favorite_params
        params.require(:favorite).permit(:landmark_id)
    end 
end
