import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
  
class Cards extends React.Component {
    constructor(props) {
      super(props);
      
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
      };
    }
  
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render () {
    const { landmark, logged_in } = this.props
    return (
      <React.Fragment>
        <Card className="cardComp">
        <CardHeader>{landmark.title} <Button onClick={()=> this.props.deleteFavorite(landmark.id)} className="likeIcon" outline color="danger">X</Button></CardHeader>
        <CardBody>
        <img className="cardImg" src={landmark.image} alt="Card image cap" />
          <CardText>Located at {landmark.address}, {landmark.city}, {landmark.state} {landmark.zip}.</CardText>
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropDown">
              <DropdownToggle caret>
                More Info
              </DropdownToggle>
              <DropdownMenu className="dropDown">
                <p>Alcohol: {landmark.alcohol ? 'This landmark offers alcohol' : 'No alcohol at this landmark'}</p>
                <p>Description: {landmark.description}</p>
              </DropdownMenu>
            </Dropdown>
        </CardBody>
      </Card>
      </React.Fragment>
    );
  }
}

export default Cards
