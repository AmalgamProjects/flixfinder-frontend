import * as React from 'react';
import Styles from './Review.module.scss';
import { ratings } from '../../../assets/icons';

interface IOwnProps {
  rating: string;
  review: string;
  user: string;
}

const Review: React.FC<IOwnProps> = ({ rating, review, user }) => (
  <div className={Styles.wrapper}>

    <div className={Styles.rating}>
      <p className={Styles.text}><
        span className={Styles.icon}>{ratings}</span>
        {rating}
      </p>
    </div>
    <div className={Styles.review}>
      <p className={Styles.text}>{review}</p>
    </div>
    <p className={Styles.textSmall}>{user}</p>
  </div>
);

export default Review;
