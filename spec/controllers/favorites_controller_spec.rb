require 'rails_helper'
describe "Favorites Controller", type: :request do
    it "creates a favorite" do
        favorite_params = {
          walk: {
            walk_id: 1
          }
        }
        post '/favorites', params: favorite_params
        expect(response).to have_http_status(:found)
    end
  end 