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
        src: "https://www.theinternettraveller.com/images/san_diego_2000x600",
        altText: 'Sunset Cliffs, San Diego',
        caption: 'Sunset Cliffs, San Diego'
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
        
        <h1>Mission Statement/Tagline</h1>
        
        <ul className = "app-uses">
          <li>App uses here</li>
          <li>App uses here</li>
          <li>App uses here</li>
        </ul>
        
        <h2>About Us</h2>
        
        <div className="about-us">
        <Card className="cardComp">
          <CardHeader>Paige MacGregor</CardHeader>
            <CardBody>
              <CardImg className = "headshot-p" top width="100%" src="https://media.licdn.com/dms/image/C4E03AQH3j2pFYZps_g/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=gZXRZYPrjdE-j1QvqLeGmQU3CdL2qROoQzFFkKsEoW4" alt="Paige's Headshot" />
              <CardText>About Paige:</CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Amanda MacGregor</CardHeader>
            <CardBody>
              <CardImg className = "headshot-a" top width="100%" src="https://media.licdn.com/dms/image/C5603AQFef8bsUp04kA/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=5oqpSsT6JAYnfFFSnA5L1pmscLyWypCmahEFZUAZIAM" alt="Amanda's Headshot" />
              <CardText>About Amanda:</CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Evan Katz</CardHeader>
            <CardBody>
              <CardImg className = "headshot-e" top width="100%" src="https://media.licdn.com/dms/image/C4E03AQFxZ_ekOUjaIQ/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=__XG0UH3AbDWO9EY3lnujYqMxFPgXPbxyjZa9oHl3uE" alt="Evan's Headshot" />
              <CardText>About Evan:</CardText>
            </CardBody>
        </Card>
        
        <Card className="cardComp">
          <CardHeader>Jared Lemke</CardHeader>
            <CardBody>
              <CardImg className = "headshot-j" top width="100%" src="https://media.licdn.com/dms/image/C4E03AQF1oNYv0RDPYg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=2sQnTfkaqpsl5cJcfEn4q0gu9h6pDUdoj59UoMeiprM" alt="Jared's Headshot" />
              <CardText>About Jared:</CardText>
            </CardBody>
        </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
