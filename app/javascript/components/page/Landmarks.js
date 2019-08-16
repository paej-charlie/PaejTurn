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
            // landmarks = response.map((landmark) => {
            //     {
            //         id: landmark.id
            //         title: landmark.title
            //         address: landmark.address
            //         city: landmark.city
            //         state: landmark.state
            //         zip: landmark.zip
            //         description: landmark.description
            //         alcohol: landmark.alcohol
            //         latitude: landmark.latitude
            //         longitude: landmark.longitude
            //         image: landmark.image
                    
            //     }
            // })
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
            console.log(favorites)
            this.setState({favorites})
        })
     }
      
    createFavorite = (attrs) =>{
        console.log('banana')
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
    
    render () {
        const { landmarks } = this.state
        const { current_user_id, logged_in } = this.props
        console.log(landmarks)
            return (
              <React.Fragment>
              <h1>Landmarks</h1>
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
