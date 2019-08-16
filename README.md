## History in Motion 
History in Motion is a guided walking tour app with walks around downtown San Diego, California. Whether you want to checkout some historic bars, buildings, or places in history this is the app for you!

## Motivation
History in Motion was the capstone project from Team PAEJ in the 2019 Charlie cohort at LEARN Academy. No one in the group is native to San Diego, and we saw this as a good opportunity to learn more about what San Diego used to be, all in one place and accessible as we're walking around exploring the city.

## Build status
MVP is met - we wanted to have a home page with an about section, a carousel of images, linke to the landmarks in our database, the ability to sign up/log in/log out, and when logged in view teo 'curated walks' - one for landmarks, one for speakeasies.  Currently in process is the Favorite functionality - logged-in users can 'Like' a landmark to save for later, then access in a Favorites page.  Functionality for unlike/Like to stay liked when the user leaves and returns to the page are in process, ice-box and may be removed in final product.
 
## Screenshots
![Image of Logo]('./javascript/map-img.png')

## Tech/framework used

<b>Built with</b>
- [Ruby on Rails](https://rubyonrails.org/)
- [React.js](https://reactjs.org/)
- [Reactstrap](https://reactstrap.github.io/)

## Features
What makes your project stand out?
There is a home page with a carousel of images of San Diego at it's best.  Scrolling down, there are some quick bulletpoints detailing how this app is useful, some quick historical facts about the city, and an About Us section. 

There is a navigation bar that linkes to various pages - Walks and Favorites are hidden until the user is signed up/signed in. 

The Landmarks page contains cards for each waypoint - location, photo, and history/detail. Following the trend of history, the last few landmarks are local speakeasies - bars where you can get a feel of the past.

The Walks page contains two walks; one is all historical markers within the same few blocks, and another with all speakeasies - also within the Gaslamp district.

The header (with links to all pages) and footer are present on all pages.

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

We added a few required fields on top of Devise to sign up:

```class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token
    
    protected

      def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :age])
      end
end
```

As far as React, many of our components held state, and also passed that state on:

```class Landmarks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            landmarks: [],
            favorites: []
        }
        this.getLandmarks()
        this.getFavorites()
    }
    
    getLandmarks = () => {
        const { landmarks } = this.state
        fetch("/landmarks")
        .then( response => {
            return response.json()
        })
        .then( landmarks => {
            this.setState({landmarks})
        })
    }
    
    getFavorites(){
        const { favorites } = this.state
        fetch("/favorites")
        .then( response => {
            return response.json()
        })
        .then( favorites => {
            this.setState({favorites})
        })
     }
      
    createFavorite = (attrs) =>{
        return fetch("/favorites",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({favorite: attrs})
        })
        .then(response => {
            console.log(response)
            if(response.status === 201){
                this.getFavorites()
            }
        })
    }
  ```
  
  ```class Favorites extends React.Component {
  constructor(props){
      super(props)
      const { current_user_id } = this.props
      
      this.state = {
          favorites: {
              landmarks: []
          },
      }
      this.getFavorites(current_user_id)
  }
  
  getFavorites = (id) => {
      const { favorites } = this.state
      fetch(`/users/${id}`)
      .then( response => {
          console.log(response)
          return response.json()
      })
      .then( favorites => {
          console.log(favorites)
          this.setState({favorites})
      })
  }
```
  
  In the Header component, we also chose to only show certain links based on logged-in status:
  
  ``` return (
      <React.Fragment>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand className = "navbar" href="/">History in Motion</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/Landmarks">Landmarks</NavLink>
                    </NavItem>
                    
                    <NavItem>
                      {logged_in &&
                      <NavLink href="/Walks">Guided Tours</NavLink>
                      }
                    </NavItem>
                    
                    <NavItem>
                      {logged_in &&
                      <NavLink href={`/user/${current_user_id}`}>Favorites</NavLink>
                      }
                    </NavItem>
                    
                    <NavItem>
                      {logged_in &&
                        <NavLink href={sign_out_route}>Log Out</NavLink>
                      }
                      {!logged_in &&
                        <NavLink href={sign_in_route}>Log In</NavLink>
                      }
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
          </div>
      </React.Fragment>
  ```


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

1. Check out the home page - fun facts about the city (and the dev team) are here.
2. Navigate to the Landmarks page; peruse and decide if you see a few you'd like to have easy access to next time you're out and about.
3. Create an account!  Once you're logged in, you have access to Like landmarks of your choosing. Once liked, you will find that landmark in the Favorites page for easy access.
4. Also once logged in, you have access to 'curated walks' - we've taken all landmarks and broken them out into two distinct walks.  One for historical sites, and another for a speakeasy crawl.

## Credits
- [Paige MacGregor](https://github.com/paigem33)
- [Jared Lemke](https://github.com/JL347)
- [Evan Katz](https://github.com/evankatz14)
- [Amanda MacGregor](https://github.com/amandamacgregor)