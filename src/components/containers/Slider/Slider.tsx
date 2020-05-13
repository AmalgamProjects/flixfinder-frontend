import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Styles from './Slider.module.scss';
import { arrow } from '../../../assets/icons';
import { SliderElement } from '../../presentationals';

interface IOwnProps {
}

type Props = IOwnProps;

class Slider extends Component<Props> {
  render() {
    return (
      <div>
        <Carousel
          arrowLeft={<div className={Styles.arrowLeft}>{arrow}</div>}
          arrowRight={<div className={Styles.arrowRight}>{arrow}</div>}
          addArrowClickHandler
          draggable={false}
          infinite
        >
          <SliderElement />
          <SliderElement />
        </Carousel>
      </div>
    );
  }
}

export default Slider;
