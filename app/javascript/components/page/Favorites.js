import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Cards from '../component/Cards'

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
        <div className="landmarksWalks">
        {favorites.landmarks.map((favorite, index) => {
          return(
            <Cards key={favorite.id} landmark = { favorite }  />
          )
        })}
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites
