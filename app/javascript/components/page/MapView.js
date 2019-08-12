import React from "react"
import PropTypes from "prop-types"
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class MapView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markers: []
    }
    this.getMarkers()
  }
  
  getMarkers = () => {
    const { markers } = this.state
    fetch("/landmarks")
    .then( response => {
      return response.json()
    })
    .then( markers => {
      this.setState({markers})
      
    })
    
  }
  
  render() {
    const { markers } = this.state
    console.log(markers)
    return (
      <div className="mapView">
      <div className="map">
      <LeafletMap
        center={[32.8, -117]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {markers.map((marker, index) =>{
          let lat = marker.latitude
          let long = marker.longitude
              return (
                  <Marker position={[lat, long]}>
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
        <li className="list-group-item">Landmark name</li>
        <li className="list-group-item">Landmark name</li>
        <li className="list-group-item">Landmark name</li>
        <li className="list-group-item">Landmark name</li>
        <li className="list-group-item">Landmark name</li>
      </ul>
      <h2>Directions:</h2>
      <ul className="list-group list-group-flush mapUl">
        <li className="list-group-item">Direction</li>
        <li className="list-group-item">Direction</li>
        <li className="list-group-item">Direction</li>
        <li className="list-group-item">Direction</li>
        <li className="list-group-item">Direction</li>
      </ul>
      </div>
    );
  }
}

export default MapView


