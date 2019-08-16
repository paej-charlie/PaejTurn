import React from "react"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, 
  CardHeader, 
  CardImg, 
  CardBody,
  CardTitle, 
  CardText
} from 'reactstrap';

    const items = [
      {
        src: "https://www.theinternettraveller.com/images/san_diego_2000x600",
        altText: 'Sunset Cliffs, San Diego',
        caption: 'Sunset Cliffs, San Diego'
      },
      {
        src: "https://www.thebristolsandiego.com/resourcefiles/mainimages/bhsd-gaslamp_1.jpg",
        altText: 'Gaslamp Quarter',
        caption: 'Gaslamp Quarter'
      },
      {
        src: "https://www.thebristolsandiego.com/resourcefiles/mainimages/location-of-san-diego-hotel-california-top.jpg",
        altText: 'Downtown San Diego',
        caption: 'Downtown San Diego'
      },
      {
        src: "https://www.empress-hotel.com/resourcefiles/mainimages/spring-in-la-jolla-san-diego_1.jpg",
        altText: 'La Jolla',
        caption: 'La Jolla'
      }
    ];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className = "carouselCont">
            <div className = "imgCont">
              <img src={item.src} alt={item.altText} />
          </div>
            <div className = "textCont">
              <CarouselCaption captionHeader={item.caption} className = "imgCap" />
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <React.Fragment>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
        
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        
        <h2>History in Motion is a guided walking tour app with walks around downtown San Diego, California. Whether you want to checkout some historic bars, buildings, or places in history this is the app for you!</h2>
        
        <ul className = "app-uses">
          <li>Curated walking tours with options for alcohol or no alcohol on your walk</li>
          <li>Map with waypoints of specific locations on walks</li>
          <li>Historic details of each location</li>
        </ul>
        
        <div className = "banner">
        <h2>About Us</h2>
        </div>
        
        <div className="about-us">
        <Card className="cardComp">
          <CardHeader>Paige MacGregor</CardHeader>
            <CardBody>
              <div className = "headshot-p"></div>
              <CardText>About Paige:</CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Amanda MacGregor</CardHeader>
            <CardBody>
              <div className="headshot-a"></div>
              <CardText>About Amanda:</CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Evan Katz</CardHeader>
            <CardBody>
              <div className = "headshot-e"></div>
              <CardText>About Evan:</CardText>
            </CardBody>
        </Card>
        
        <Card className="cardComp">
          <CardHeader>Jared Lemke</CardHeader>
            <CardBody>
              <div className = "headshot-j"></div>
              <CardText>Cool, calm and collected under pressure. </CardText>
            </CardBody>
        </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
// <CardImg className = "headshot-a" top width="100%" src="https://media.licdn.com/dms/image/C5603AQFef8bsUp04kA/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=5oqpSsT6JAYnfFFSnA5L1pmscLyWypCmahEFZUAZIAM" alt="Amanda's Headshot" />