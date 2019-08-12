import React from "react"

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
                <div className="card mb-3" key={landmark.id}>
                    <img src="https://placekitten.com/200/139" alt="Placekitten"></img>
                    <div className="card-body">
                        <h5 className="card-title">{landmark.title}</h5>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
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
