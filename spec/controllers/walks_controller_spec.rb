require 'rails_helper'

describe "Walks Controller", type: :request do
  it "gets a list of Walks" do
    Walk.create(name:"Speakeasies", length: "2 stops", duration: "2 hours", type: "walking", alcohol: true)
    get '/walks'
    json = JSON.parse(response.body)
    expect(response).to have_http_status(:ok)
    expect(json.length).to eq 1
  end
  
#   it "gets a show of walk" do
#     Walk.create(name:"Speakeasies", length: "2 stops", duration: "2 hours", type: "walking", alcohol: true)
#     get '/walks'
#     json = JSON.parse(response.body)
#     expect(response).to have_http_status(:ok)
#     expect(json.length).to eq 1
#   end
  
# edit and run above test for Show (need to figure out how to account for params by :id and only when colume 'type' is resolved)
end