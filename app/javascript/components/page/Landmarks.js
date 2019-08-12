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
        console.log(landmarks)
            return (
              <React.Fragment>
              <h1>Landmarks</h1>
              <div className="landmarks">
              {landmarks.map((landmark) => {
                return (
                    <Cards landmark = { landmark }  />
                )
                  })}
                </div>
              </React.Fragment>
            )
        }
}

export default Landmarks
