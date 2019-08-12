import React from "react"
import PropTypes from "prop-types"
import {
 BrowserRouter as Router, 
 Link,
 Route, 
 Switch,
 Redirect,
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
  
  render () {
      const { 
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
        <Router>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/Landmarks" exact component={Landmarks}/>
            <Route path="/Walks" exact component={Walks}/>
            <Route path="/Walk/:id" exact component={MapView}/>
            <Route path="/Favorites" 
              render={(props) => 
                <Favorites 
                  current_user = { current_user_id }
                />
              } 
            />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}

export default MainApp

