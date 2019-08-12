import React from "react"

import MapView from './MapView'

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
                <div className="card mb-3" key={walk.id}>
                    <img src="https://placekitten.com/200/139" alt="Placekitten"></img>
                      <div className="card-body">
                          <h5 className="card-title">{walk.name}</h5>
                          <p className="card-text">This guided tour will take you about {walk.duration} hours </p>
                      </div>
                    <div className="card-body">
                        <a
                          className="card-title" 
                          href={`https://2082ac348b8a4bf4abf95c48546ecb63.vfs.cloud9.us-west-2.amazonaws.com/Walk/${walk.id}`}
                        >
                          {walk.name}
                        </a>
                        <p className="card-text">This guided tour will take you about {walk.duration} hours </p>
                    </div>
                </div>
                )
              })}
              </React.Fragment>
            )
        }
}

export default Walks
