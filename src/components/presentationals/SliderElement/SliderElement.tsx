import * as React from 'react';
import Styles from './SliderElement.module.scss';
import { Container } from '../../containers';
import movieTestBackground from '../../../assets/images//movie-background-test.jpg';
import movieTestPoster from '../../../assets/images/movie-poster-test.jpg';
import { ratings } from '../../../assets/icons';

interface IOwnProps { }

const SliderElement: React.FC<IOwnProps> = () => (
  <div className={Styles.wrapper} style={{ backgroundImage: `url(${movieTestBackground})` }}>
    <div className={Styles.innerWrapper}>
      <Container>
        <div className={Styles.content}>
          <div>
            <h1 className={Styles.heading}>Top Picks</h1>
            <img className={Styles.poster} src={movieTestPoster} />
          </div>
          <div className={Styles.details}>
            <h2 className={Styles.title}>Inception</h2>
            <div className={Styles.moreDetails}>
              <p className={Styles.paragraph}>2010</p>
              <div className={Styles.rating}>
                <p className={Styles.paragraph}><span className={Styles.ratingIcon}>{ratings}</span> 8.9/10</p>
              </div>
            </div>
            <p className={Styles.paragraph}>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</p>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

export default SliderElement;
