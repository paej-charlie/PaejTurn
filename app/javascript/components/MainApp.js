 import React from "react"
 import PropTypes from "prop-types"
 import {
  BrowserRouter as Router, 
  Link,
  Route, 
  Switch
} from 'react-router-dom'
 
 import Header from "./Header"
 import { Jumbotron } from 'reactstrap'
 import MapView from './MapView'
 
 import Landmarks from './Landmarks'
 import Walks from './Walks'
 import Footer from './Footer'
 
 
 class MainApp extends React.Component {
   render () {
       const{ 
      logged_in, 
      sign_out_route, 
      sign_in_route,
      current_user_id,
    } = this.props
     return (
      <React.Fragment>
      <Header 
        logged_in = { logged_in }
        sign_in_route = { sign_in_route }
        sign_out_route= { sign_out_route }
      />
        <Jumbotron className="headerJumbo">
          <h1>History in Motion</h1>
        </Jumbotron>
        <MapView />
        <Landmarks />
        <Footer />
    </React.Fragment>
    )
   }
 }

 export default MainApp

