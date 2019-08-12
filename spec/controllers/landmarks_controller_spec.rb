require 'rails_helper'

describe "Landmarks Controller", type: :request do
  it "gets a list of Landmarks" do
    Landmark.create(title:"The Broker's Building" , address: "404 Market Street", city: "San Diego", state: "CA", zip: "92101", alcohol: false, latitude: "32.711797", longitude: "-117.119791", image: "placeholder")
    get '/landmarks'
    json = JSON.parse(response.body)
    expect(response).to have_http_status(:ok)
    expect(json.length).to eq 1
  end
end