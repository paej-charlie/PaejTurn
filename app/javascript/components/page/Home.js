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
        src: "https://i0.wp.com/blog.themenlohouse.com/wp-content/uploads/2017/02/5-best-weekend-getaways-los-angeles-8.jpg?fit=1400%2C600&ssl=1",
        altText: 'La Jolla',
        caption: 'La Jolla'
      },
      {
        src: "http://donnamedrea.com/wp-content/uploads/2016/04/san-diego-1450x600.jpg",
        altText: 'Gaslamp Quarter',
        caption: 'Gaslamp Quarter'
      },
      {
        src: "http://socialventurepartners.org.s3.amazonaws.com/www.socialventurepartners.org/sites/54/2013/05/San-Diego-Slider.jpg",
        altText: 'Downtown San Diego',
        caption: 'Downtown San Diego'
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
              <CarouselCaption captionHeader={item.caption} />
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
        
        <h1>About Us</h1>
        
        <div className="about-us">
        <Card className="cardComp">
          <CardHeader>Jared Lemke</CardHeader>
            <CardBody>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C4E03AQF1oNYv0RDPYg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=2sQnTfkaqpsl5cJcfEn4q0gu9h6pDUdoj59UoMeiprM" alt="Jared's Headshot" />
              <CardText></CardText>
            </CardBody>
        </Card>
        
        <Card className="cardComp">
          <CardHeader>Paige MacGregor</CardHeader>
            <CardBody>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C4E03AQH3j2pFYZps_g/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=gZXRZYPrjdE-j1QvqLeGmQU3CdL2qROoQzFFkKsEoW4" alt="Paige's Headshot" />
              <CardText></CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Amanda MacGregor</CardHeader>
            <CardBody>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C5603AQFef8bsUp04kA/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=5oqpSsT6JAYnfFFSnA5L1pmscLyWypCmahEFZUAZIAM" alt="Amanda's Headshot" />
              <CardText></CardText>
            </CardBody>
        </Card>
        
         <Card className="cardComp">
          <CardHeader>Evan Katz</CardHeader>
            <CardBody>
              <CardImg top width="100%" src="https://media.licdn.com/dms/image/C4E03AQFxZ_ekOUjaIQ/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=__XG0UH3AbDWO9EY3lnujYqMxFPgXPbxyjZa9oHl3uE" alt="Evan's Headshot" />
              <CardText></CardText>
            </CardBody>
        </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
