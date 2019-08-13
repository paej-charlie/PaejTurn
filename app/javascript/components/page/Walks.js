import React from "react"
import WalkCards from '../component/WalkCards'
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
            return (
              <React.Fragment>
              <h1>Guided Tours</h1>
              <div className="landmarksWalks">
              {walks.map((walk) => {
                return (
                <WalkCards key = { walk.id } walk = { walk }/>
                )
              })}
              </div>
              </React.Fragment>
            )
        }
}

export default Walks
