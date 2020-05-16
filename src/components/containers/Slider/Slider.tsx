import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { IMovie } from '../../../types/movie';
import { arrow } from '../../../assets/icons';
import { MovieHero, Container } from '..';
import Styles from './Slider.module.scss';

interface IOwnProps {
  picks: IMovie[];
}

const Slider: React.FC<IOwnProps> = ({ picks }) => {
  console.log('picks', picks.length);

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
        {picks.map(pick => <MovieHero key={pick.id} movie={pick} />)}
      </Carousel>
    </div>
  );
};

export default Slider;
