import React from "react"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

    const items = [
      {
        src: 'https://s.yimg.com/ny/api/res/1.2/fh08jL.NwRmn.ah2hfPdXQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://hips.hearstapps.com/hmg-prod/images/san-diego-2019-1546623583.jpg?crop=1.00xw%3A1.00xh%3B0%2C0&amp;resize=1440%3A%2A',
        altText: 'Hotel Del Coronado',
        caption: 'Hotel Del Coronado'
      },
      {
        src: 'http://onyx.urvenue.com/imateq/uploads/704780572/800SC400/15022393.jpg',
        altText: 'Gaslamp Quarter',
        caption: 'Gaslamp Quarter'
      },
      {
        src: 'https://blog.virginatlantic.com/wp-content/uploads/2016/05/3360iCF4B98A258C18C3D.jpg',
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
      </React.Fragment>
    );
  }
}

export default Home
