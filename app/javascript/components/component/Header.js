import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormControl } from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  
  render () {
    const{ 
      logged_in, 
      sign_out_route, 
      sign_in_route,
      current_user_id,
    } = this.props
    
    return (
      <React.Fragment>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">HiM</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/Landmarks">Landmarks</NavLink>
                    </NavItem>
                    
                    <NavItem>
                      {logged_in &&
                      <NavLink href="/Walks">Guided Tours</NavLink>
                      }
                    </NavItem>
                    
                    <NavItem>
                      {logged_in &&
                      <NavLink href={`/user/${current_user_id}`}>Favorites</NavLink>
                      }
                    </NavItem>
                    
                    <NavItem>
                      {logged_in &&
                        <NavLink href={sign_out_route}>Log Out</NavLink>
                      }
                      {!logged_in &&
                        <NavLink href={sign_in_route}>Log In</NavLink>
                      }
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
          </div>
      </React.Fragment>
    );
  }
}

export default Header
