import React from "react"

class Walks extends React.Component {
    
    render () {
        const { walks } = this.props
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
                </div>
                )
            })}
              </React.Fragment>
            )
        }
}

export default Walks
