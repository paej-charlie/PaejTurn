class FavoritesController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]
    
    def create
        @favorite = current_user.favorites.create favorite_params
        render json: @favorite, status: 201
    end 
    
    def destroy
        @favorite = current_user.favorites.find params[:id]
        if @favorite.destroy
            render json: @favorite
        else
            render json: {error: 'could not destroy'}, status: 400
        end 
    end 
    
    private
    
    def favorite_params
        params.require(:favorite).permit(:walk_id)
    end 
end
