import React from "react"
import Cards from '../component/Cards'

class Landmarks extends React.Component {
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
            if(response.status === 201){
                this.getLandmarks()
            }
        })
    }
    
    render () {
        const { landmarks } = this.state
        const { current_user_id, logged_in } = this.props
            return (
              <React.Fragment>
              
              <div className = "banner-lm">
              <h1>Landmarks</h1>
              </div>
              
              <div className="landmarksWalks">
              {landmarks.map((landmark) => {
                return (
                    <Cards key={landmark.title} 
                        landmark = { landmark } 
                        current_user_id = { current_user_id } 
                        logged_in = { logged_in }
                        createFavorite = { this.createFavorite }
                    />
                )
              })}
              </div>
              </React.Fragment>
            )
        }
}

export default Landmarks
