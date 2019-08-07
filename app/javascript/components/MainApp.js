 import React from "react"
 import PropTypes from "prop-types"
 import { Jumbotron } from 'reactstrap'
 import Nav from './Nav'
 import MapView from './MapView'
 
 
 class MainApp extends React.Component {
   render () {
     return (
      <React.Fragment>
      <Nav />
        <Jumbotron className="headerJumbo">
          <h1>History in Motion</h1>
        </Jumbotron>
        <MapView />
      </React.Fragment>
     );
   }
 }

 export default MainApp

