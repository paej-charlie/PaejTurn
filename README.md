## History in Motion 
History in Motion is a guided walking tour app with walks around downtown San Diego, California. Whether you want to checkout some historic bars, buildings, or places in history this is the app for you!

## Motivation
History in Motion was the capstone project from Team PAEJ in the 2019 Charlie cohort at LEARN Academy.

## Build status
Currenlty in development 
 
## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used

<b>Built with</b>
- [Ruby on Rails](https://rubyonrails.org/)
- [React.js](https://reactjs.org/)
- [Reactstrap](https://reactstrap.github.io/)

## Features
What makes your project stand out?

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## API Reference

- [Leaflet](https://leafletjs.com/)

## Tests
With RSpec, we tested both Controllers and Models to verify the existence of desired outcomes, and database table relationships.

With Jest/Enzyme, we tested Components - if they are rendering, if they contain expected links and text, and also if they contain props as we would expect.


The following is an example of a Controller test - we wrote this to ensure that after creating a record, we can expect to see that record displayed when we visit /landmarks:

```require 'rails_helper'

describe "Landmarks Controller", type: :request do
  it "gets a list of Landmarks" do
    Landmark.create(title:"The Broker's Building" , address: "404 Market Street", city: "San Diego", state: "CA", zip: "92101", alcohol: false, latitude: "32.711797", longitude: "-117.119791", image: "placeholder")
    get '/landmarks'
    json = JSON.parse(response.body)
    expect(response).to have_http_status(:ok)
    expect(json.length).to eq 1
  end
end
```

The following is an example of a Model test (we didn't see a need to be extremely robust in testing Models). Since we added a few required fields to our Sign-Up form - in addition to the default Devise - we wanted to confirm these fields were required:

```RSpec.describe User, type: :model do
  it "should validate first name" do
    user = User.create
    expect(user.errors[:first_name]).to_not be_empty
  end
end
```

The following is an example of testing done for React components.  In this case, we wanted to make sure a) the component can, in fact, render and b) locate a link to Home:

```Enzyme.configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
  })

 it('NavBar has a link to Home', ()=>{
   const app = mount(<Header />)
   expect(app.find('a').text()).toEqual('Home')
 })
 ```

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Credits
- [Paige MacGregor](https://github.com/paigem33)
- [Jared Lemke](https://github.com/JL347)
- [Evan Katz](https://github.com/evankatz14)
- [Amanda MacGregor](https://github.com/amandamacgregor)