 import React from "react"
 import PropTypes from "prop-types"
 import Header from "./Header"
 import { Jumbotron } from 'reactstrap'
 import MapView from './MapView'
 
 
 class MainApp extends React.Component {
   render () {
     return (
      <React.Fragment>
      <Header />
        <Jumbotron className="headerJumbo">
          <h1>History in Motion</h1>
        </Jumbotron>
        <MapView />
    </React.Fragment>
    )
   }
 }

 export default MainApp

