class TripsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]
    
    def index 
        @trips = Trip.all
        render json: @trips
    end 
    
    def show
        @trip = Trip.find params[:id]
        render json: @trip
    end 
    
    def create
        @trip = current_user.trips.create trip_params
        render json: @trip, status: 201
    end 
    
    def update
        @trip = current_user.trips.find params[:id]
        @trip.update(trip_params)
        render json: @trip
    end 
    
    def destroy
        @trip = current_user.trips.find params[:id]
        if @trip.destroy
            render json: @trip
        else
            render json: {error: 'could not destroy'}, status: 400
        end 
    end 
    
    private
    
    def trip_params
        params.require(:trip).permit(:review, :completed)
    end 
    
end
end
