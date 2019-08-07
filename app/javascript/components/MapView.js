import React from "react"
import PropTypes from "prop-types"
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markers: []
    }
    this.getMarkers()
  }
  
  getMarkers = () => {
    fetch("/landmarks")
    .then( response => {
      return response.json()
    })
    .then( apartments => {
      this.setState({markers})
    })
    console.log(this.state)
  }
  
  render() {
    return (
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
        {this.state.markers.map((marker, index) =>{
              return (
                  <Marker position={[{lat}, {long}]}>
                    <Popup>
                      {name}
                    </Popup>
                  </Marker>
                )
              })}
      </LeafletMap>
    );
  }
}

export default Map
