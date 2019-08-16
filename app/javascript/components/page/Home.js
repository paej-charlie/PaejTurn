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
        
        <hr></hr>
        
        <h3>App Features</h3>
        
        <ul className = "app-uses">
          <li className = "app-uses-li">Curated walking tours with options for alcohol or no alcohol</li>
          <li className = "app-uses-li">Responsive map with waypoints of specific locations on walks</li>
          <li className = "app-uses-li">Historic details and facts of each location provided</li>
        </ul>
        
        <hr></hr>
        
        <h3>San Diego Fun Facts!</h3>
        
        <ul className = "fun-facts">
          <li>San Diego was known as the Tuna Capital of the World from the early 1930s to the late 1970s</li>
          <li>Wyatt Earp ran four gambling halls in San Diego in the late 1800s</li>
          <li>There were at least 120 transparently illegal businesses operating in the area in 1888</li>
          <li>While Dr. Seuss was born in Massachusetts, he lived in San Diego for much of his life</li>
        </ul>
        
        <div className = "banner">
        <h2 className = "banner">About Us</h2>
        </div>
        
        <div className="about-us">
        <Card className="cardComp">
          <CardHeader>Paige MacGregor</CardHeader>
            <CardBody>
              <div className = "headshot-p"></div>
              <CardText>Enjoys writing code, fiber arts, and playing with her cat.</CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Amanda MacGregor</CardHeader>
            <CardBody>
              <div className="headshot-a"></div>
              <CardText>Currently taking advantage of San Diego opportunities by engaging in a full-stack development bootcamp. I'm interested in bringing my accounting background and development skills together into a unique and powerful skillset. New(ish) to the San Diego area from Madison, WI and before then, Northern Colorado. </CardText>
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
              <CardText>After working in the recruiting/staffing industry for 5 years, I'm looking to make the change into development while using my strong time management and organizational skills. I'm an active person with strong interests in sports and the great outdoors.</CardText>
            </CardBody>
        </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Home