import * as React from 'react';
import Styles from './Review.module.scss';
import { ratings } from '../../../assets/icons';

interface IOwnProps {
  rating: string;
  content: string;
  author: string;
}

const Review: React.FC<IOwnProps> = ({ rating, content, author }) => (
  <div className={Styles.wrapper}>
    {rating && (
      <div className={Styles.rating}>
        <p className={Styles.text}><
          span className={Styles.icon}>{ratings}</span>
          {rating}
        </p>
      </div>
    )}
    <div className={Styles.review}>
      <p className={Styles.text}>{content}</p>
    </div>
    <p className={Styles.textSmall}>{author}</p>
  </div>
);

export default Review;
