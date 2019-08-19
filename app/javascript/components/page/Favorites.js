import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import FavCards from '../component/FavCards'

class Favorites extends React.Component {
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
          return response.json()
      })
      .then( favorites => {
          this.setState({favorites})
      })
  }
  
  deleteFavorite = (id) =>{
    const { current_user_id } = this.props
    return fetch(`/favorites/${id}`, {
        method: 'DELETE'
      }
    ).then(response => {
      if(response.status === 200){
        this.getFavorites(current_user_id)
      }else{
        response.json()
        .then(payload => {
          this.setState({error: payload.error})
        })
      }
    })
  }

  render () {
    const { favorites } = this.state
    const {logged_in } = this.props
    if(favorites == undefined){
      return(
        <div>
          Loading
        </div>
      )
    }
    return (
      <React.Fragment>
      
        <div className = "banner-f">
        <h1>My Favorite Places</h1>
        </div>
        
        <div className="landmarksWalks">
        {favorites.landmarks.map((favorite, index) => {
          return(
            <FavCards key={favorite.id} 
              landmark = { favorite }  
              logged_in = { logged_in }
              deleteFavorite = { this.deleteFavorite }
            />
          )
        })}
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites
