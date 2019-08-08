class UsersController < ApplicationController
    before_action :authenticate_user!, only: [:show]
    
    def show
        render json: current_user.to_json({:include => :landmarks})
    end 
    
end
