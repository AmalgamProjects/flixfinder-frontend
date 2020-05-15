import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Styles from './Slider.module.scss';
import { arrow } from '../../../assets/icons';
import { FullWidthMovie } from '../../presentationals';
import Container from '../Container/Container';
import movieTestBackground from '../../../assets/images//movie-background-test.jpg';

interface IOwnProps {
}

type Props = IOwnProps;

class Slider extends Component<Props> {
  render() {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.titleWrapper}>
          <Container>
            <h1 className={Styles.heading}>Top picks</h1>
          </Container>
        </div>
        <Carousel
          arrowLeft={<div className={Styles.arrowLeft}>{arrow}</div>}
          arrowRight={<div className={Styles.arrowRight}>{arrow}</div>}
          addArrowClickHandler
          draggable={false}
          infinite
          autoPlay={5000}
          animationSpeed={800}
        >
          <FullWidthMovie
            title="Movie title 1"
            background={movieTestBackground}
            details="2012"
          />
          <FullWidthMovie
            title="Movie title 2"
            background={movieTestBackground}
            details="1998"
          />
        </Carousel>
      </div>
    );
  }
}

export default Slider;
