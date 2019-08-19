import React from "react"
import PropTypes from "prop-types"
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class MapView extends React.Component {
  constructor(props){
      super(props)
      const { id } = props.match.params
      
      this.state = {
          markers: {
            landmarks: []
          }
      }
      this.getMarkers(id)
  }
  
  componentDidUpdate = (prevProps) => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if(match.params.id != prevMatch.params.id){
      this.getMarkers(match.params.id)
    }
  }
  
  getMarkers = (id) => {
      const { markers } = this.state
      fetch(`/walks/${id}`)
      .then( response => {
          console.log(response)
          return response.json()
      })
      .then( markers => {
          console.log(markers)
          this.setState({markers})
      })
  }  
    
  render() {
    const { markers } = this.state
    console.log(markers)
    if(markers == undefined){
      return(
          <div>
            Loading
          </div>
        )
    }
    return (
      <div className="mapView">
      <div className="map">
      <LeafletMap
        center={[32.71345, -117.1595]}
        zoom={16}
        maxZoom={22}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {markers.landmarks.map((marker, index) =>{
          let lat = marker.latitude
          let long = marker.longitude
              return (
                  <Marker key={index} position={[lat, long]}>
                    <Popup>
                      {marker.title}
                    </Popup>
                  </Marker>
                )
              })}
      </LeafletMap>
      </div>
      <h2>On this walk:</h2>
      <ul className="list-group list-group-flush mapUl">
      {markers.landmarks.map((marker, index) => {
          return(
              <li className="list-group-item" key={index}>{marker.title}</li>
          ) 
      })}
      </ul>
      </div>
    );
  }
}

export default MapView


