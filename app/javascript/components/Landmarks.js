import React from "react"
import PropTypes from "prop-types"

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
              {landmarks.map((landmark) => {
                return (
                <div class="card mb-3">
                    <img src="https://placekitten.com/200/139" alt="Placekitten"></img>
                        <div class="card-body">
                            <h5 class="card-title">{landmark.title}</h5>
                                <p class="card-text">{landmark.address}, {landmark.city}, {landmark.state}, {landmark.zip}</p>
                        </div>
                </div>
                )
            })}
              </React.Fragment>
            )
        }
}

export default Landmarks
