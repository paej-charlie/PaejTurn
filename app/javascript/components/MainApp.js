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
          sign_out_route = { sign_out_route }
          current_user_id = { current_user_id }
        />
        <Router>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route path="/Landmarks" 
              render={(props) => 
                <Landmarks 
                  current_user_id = { current_user_id }
                  logged_in = { logged_in }
                />
              }
            />
            <Route path="/Walks" exact component={Walks}/>
            <Route path="/Walk/:id" component={MapView}/>
            <Route path="/User/:id" 
              render={(props) =>
                <Favorites 
                  {...props}
                  current_user_id = { current_user_id }
                  logged_in = { logged_in }
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

