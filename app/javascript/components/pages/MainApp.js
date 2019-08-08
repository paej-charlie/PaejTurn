<<<<<<< HEAD:app/javascript/components/pages/MainApp.js
import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"

class MainApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
=======
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
>>>>>>> 1d8a9c157edf11b1669cd31bc3f8fab6f4f20054:app/javascript/components/MainApp.js
      </React.Fragment>
     );
   }
 }

 export default MainApp

