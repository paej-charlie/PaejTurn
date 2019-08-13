import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Favorites extends React.Component {
  constructor(props){
      super(props)
      const { match } = props
      
      this.state = {
          favorites: {
              landmarks: []
          },
      }
      this.getFavorites(match.params.id)
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

  render () {
    const { favorites } = this.state
    console.log(favorites)
    if(favorites == undefined){
      return(
        <div>
          Loading
        </div>
      )
    }
    return (
      <React.Fragment>
        <h1>My Favorite Places</h1>
        {favorites.landmarks.map((favorite, index) => {
          return(
            <Card className="cardComp" key={index}>
              <CardHeader>{favorite.title}</CardHeader>
              <CardBody>
              <CardImg top width="100%" src="http://placekitten.com/200/150" alt="Card image cap" />
                <CardText>Located at {favorite.address}, {favorite.city}, {favorite.state} {favorite.zip}.</CardText>
                   <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropDown">
                    <DropdownToggle caret>
                      More Info
                    </DropdownToggle>
                    <DropdownMenu className="dropDown">
                      <p>Alcohol: {favorite.alcohol ? 'This landmark offers alcohol' : 'No alcohol at this landmark'}</p>
                      <p>Description: {favorite.description}</p>
                    </DropdownMenu>
                  </Dropdown>
              </CardBody>
            </Card>
          )
        })}
      </React.Fragment>
    );
  }
}

export default Favorites
