import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'reactstrap';

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">HiM</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/walks">Guided Tours</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/landmarks">Landmarks</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/favorites">My Favorites</a>
                    </li>
                  </ul>
                </div>
            </nav>
      </React.Fragment>
    );
  }
}

export default Header
