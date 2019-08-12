import React from "react"
import Cards from '../component/Cards'

class Landmarks extends React.Component {

    render () {
        const { landmarks } = this.props
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
