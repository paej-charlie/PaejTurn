import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
  
class Cards extends React.Component {
    constructor(props) {
      super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      favorites: [],
      dropdownOpen: false,
      liked: 'Like'
    };
   
  }
  
  getFavorites(){
    const { favorites } = this.state
    fetch("/favorites")
    .then( response => {
        return response.json()
    })
    .then( favorites => {
        this.setState({favorites})
    })
  }
  
  createFavorite = (landmarkId) =>{
    return fetch("/favorites",{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({favorite: landmarkId})
    })
    .then(response => {
      if(response.status === 201){
        this.getFavorites()
      }
    })
  }
  
   toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  likeClick = () => {
    const { liked } = this.state
    this.createFavorite()
    if(liked === 'Like'){
      this.setState({liked: 'Liked'})
    } else {
      this.setState({liked: 'Like'})
    }
  }


  render () {
    const { landmark } = this.props
    return (
      <React.Fragment>
        <Card className="cardComp">
        <CardHeader>{landmark.title} <Button onClick={this.likeClick} className="likeIcon" outline color="danger">{ this.state.liked }</Button></CardHeader>
        <CardBody>
        <img className="cardImg" src="http://placekitten.com/400/350" alt="Card image cap" />
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
