import React from "react"
import PropTypes from "prop-types"

class Walks extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                  walks: []
            }
            this.getWalks()
        }

      
    getWalks = () => {
        const { walks } = this.state
        fetch("/walks")
        .then( response => {
            return response.json()
         })
         .then( walks => {
            this.setState({walks})
        })
    }
    
    render () {
        const { walks } = this.state
        console.log(walks)
            return (
              <React.Fragment>
              {walks.map((walk) => {
                return (
                <div class="card mb-3">
                    <img src="https://placekitten.com/200/139" alt="Placekitten"></img>
                        <div class="card-body">
                            <h5 class="card-title">{walk.title}</h5>
                                <p class="card-text">{walk.address}, {walk.city}, {walk.state}, {walk.zip}</p>
                        </div>
                </div>
                )
            })}
              </React.Fragment>
            )
        }
}

export default Walks
