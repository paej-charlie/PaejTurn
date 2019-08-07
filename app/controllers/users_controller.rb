class UsersController < ApplicationController
    before_action :authenticate_user!, only: [:show]
    
    def index 
        render json: current_user.to_json({:include => :trips})
    end 
    
    def show
        render json: current_user.to_json({:include => :landmarks})
    end 
    
end
