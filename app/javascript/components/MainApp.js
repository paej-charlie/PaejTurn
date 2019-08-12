import React from "react"
import PropTypes from "prop-types"
import {
 BrowserRouter as Router, 
 Link,
 Route, 
 Switch
} from 'react-router-dom'
 
import { Jumbotron } from 'reactstrap'

import Header from './component/Header'
import Footer from './component/Footer'
import Home from './page/Home'
import MapView from './page/MapView'
import Landmarks from './page/Landmarks'
import Walks from './page/Walks'
import Favorites from './page/Favorites'
 
 
class MainApp extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           landmarks: [],
           walks: [],
           markers: []
       }
       this.getLandmarks()
       this.getWalks()
       // this.getMarkers()
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
  
  getWalks = () => {
      const { walks } = this.state
      fetch("/walks")
      .then( response => {
          return response.json()
      })
      .then( walks => {
          this.setState({walks})
      })
  }
  
  getMarkers = (attrs) => {
      const { markers } = this.state
      fetch("/walks", {
          method: 'SHOW',
          Headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({walks: attrs})
      })
      .then( response => {
          return response.json()
      })
      .then( response => {
          this.setState({markers})
      })
  }
  
   render () {
       const { 
           logged_in, 
           sign_out_route, 
           sign_in_route,
           current_user_id,
       } = this.props
       
       const {
           landmarks,
           walks,
           markers
       } = this.state
       
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
         <Router>
           <Switch>
             <Route exact path="/" exact component={Home} />
             <Route path="/Landmarks" 
               render={(props) => 
                 <Landmarks 
                   currentUserId = { current_user_id } 
                   landmarks = { landmarks }
                 /> 
               } 
             />
             <Route path="/Walks" 
               render={(props) => 
                 <Walks
                   currentUserId = { current_user_id } 
                   walks = { walks }
                 /> 
               } 
             />
             <Route path="/Favorites" exact component={Favorites} />
           </Switch>
         </Router>
       </React.Fragment>
     )
   }
}

export default MainApp

