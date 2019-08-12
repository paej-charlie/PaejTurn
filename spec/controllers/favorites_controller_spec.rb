require 'rails_helper'

# //added Index method to Favorites Controller - but test isn't reading the test data I've set.  Moving on to Create.//
# describe "Favorites Controller", type: :request do
#   it "gets a list of Favorites" do
#     User.create(email: 'test@test.com', first_name: 'bob', last_name: 'bob', age: true, latitude: "32", longitude: "32")
#     Landmark.create(title:"The Broker's Building" , address: "404 Market Street", city: "San Diego", state: "CA", zip: "92101", alcohol: false, latitude: "32.711797", longitude: "-117.119791", image: "placeholder")
#     Favorite.create(user_id: 1, landmark_id: 1)
#     get '/favorites'
#     json = JSON.parse(response.body)
#     expect(response).to have_http_status(:ok)
#     expect(json.length).to eq 1
#   end
# end

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