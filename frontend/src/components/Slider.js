import React from 'react'
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import BannerImg from '../assets/img/success-banner.jpg';

const items = [
  {
    src: BannerImg,
    altText: 'Slide 1',
    caption: 'Lorem Ipsum'
  },
  {
    src: BannerImg,
    altText: 'Slide 2',
    caption: 'Lorem Ipsum 2'
  },
  {
    src: BannerImg,
    altText: 'Slide 3',
    caption: 'Lorem Ipsum 3'
  }
];

class Slider extends React.Component{
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
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {items.map((item) => (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.altText}
          >
            <img src={item.src} alt={item.altText} className="img-fluid"/>
            <CarouselCaption 
              captionText={item.caption} 
              captionHeader={item.caption} 
            />
          </CarouselItem>  
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Slider;
