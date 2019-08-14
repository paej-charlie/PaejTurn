import React from "react"
import Cards from '../component/Cards'

class Landmarks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            landmarks: []
        }
        this.getLandmarks()
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
    
    render () {
        const { landmarks } = this.state
            return (
              <React.Fragment>
              <h1>Landmarks</h1>
              <div className="landmarksWalks">
              {landmarks.map((landmark) => {
                return (
                    <Cards key={landmark.id} landmark = { landmark }  />
                )
              })}
              </div>
              </React.Fragment>
            )
        }
}

export default Landmarks
