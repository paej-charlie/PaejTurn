import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
  
class Cards extends React.Component {
    constructor(props) {
      super(props);
      
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false,
        liked: 'Like',
        textHideShow: 'textHide',
        textStatus: 'Read more'
      };
  }
  
   toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  likeClick = () => {
    const { liked } = this.state
    const { landmark, createFavorite } = this.props
    const form = {
      landmark_id: landmark.id
    }
    if(liked === 'Like'){
      createFavorite(form)
      this.setState({liked: 'Liked'})
    } else {
      this.setState({liked: 'Like'})
    }
  }
  
  changeText = () => {
    const { textHideShow, textStatus } = this.state
    if(textHideShow === "textHide"){
      this.setState({textHideShow: '', textStatus: "Read less"})
    } else {
      this.setState({textHideShow: 'textHide', textStatus: "Read more"})
    }
  }
  
  render () {
    const { landmark, favorites, logged_in } = this.props
    const { textHideShow, textStatus } = this.state
    return (
      <React.Fragment>
        <Card className="cardComp">
        {logged_in &&
          <CardHeader>{landmark.title} <Button onClick={this.likeClick} className="likeIcon" outline color="danger">{ this.state.liked }</Button></CardHeader>
        }
        {!logged_in &&
           <CardHeader>{landmark.title}</CardHeader>
        }
        <CardBody>
        <img className="cardImg" src={landmark.image} alt="Card image cap" />
          <CardText className={textHideShow}>{landmark.description} </CardText>
          <Button className="btn-primary landmarkBtn readMoreBtn" onClick={this.changeText}>{textStatus}</Button>
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropDown">
              <DropdownToggle caret>
                Fast Facts
              </DropdownToggle>
              <DropdownMenu className="dropDown">
                <p>Alcohol: {landmark.alcohol ? 'This landmark offers alcohol' : 'No alcohol at this landmark'}</p>
                <p>Located at {landmark.address}, {landmark.city}, {landmark.state} {landmark.zip}</p>
              </DropdownMenu>
            </Dropdown>
        </CardBody>
      </Card>
      </React.Fragment>
    );
  }
}

export default Cards