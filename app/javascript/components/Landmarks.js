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
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown button
                                    </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                </div>
                        </div>
                </div>
                )
            })}
              </React.Fragment>
            )
        }
}

export default Landmarks
