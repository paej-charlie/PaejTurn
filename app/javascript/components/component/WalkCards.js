import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardBody, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
  
class WalkCards extends React.Component {
      constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  
   toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render () {
    const { walk } = this.props
    console.log('cat')
    return (
      <React.Fragment>
        <Card className="cardComp walksCard" key={walk.id}>
        <CardHeader>{walk.name}</CardHeader>
        <CardBody>
        <img class="cardImg" src="http://placekitten.com/400/350" alt="Card image cap" />
          <CardText>Distance: {walk.distance} <br /> Duration: {walk.duration}</CardText>
          <a className="btn btn-primary walkBtn" href={`https://2082ac348b8a4bf4abf95c48546ecb63.vfs.cloud9.us-west-2.amazonaws.com/Walk/${walk.id}`}>Start Walk</a>
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropDown">
              <DropdownToggle caret>
                More Info
              </DropdownToggle>
              <DropdownMenu className="dropDown">
                <p>Alcohol: {walk.alcohol ? 'This walk has alcohol' : 'No alcohol on this walk'}</p>
                <p>Number of landmarks?</p>
              </DropdownMenu>
            </Dropdown>
        </CardBody>
      </Card>
      </React.Fragment>
    );
  }
}

export default WalkCards
