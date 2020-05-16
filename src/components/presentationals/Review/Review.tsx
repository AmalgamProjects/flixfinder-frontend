import * as React from 'react';
import ShowMoreText from 'react-show-more-text';
import Styles from './Review.module.scss';
import { ratings } from '../../../assets/icons';

interface IOwnProps {
  rating: string;
  content: string;
  author: string;
}

const Review: React.FC<IOwnProps> = ({ rating, content, author }) => (
  <div className={Styles.wrapper}>
    <div className={Styles.rating}>
      <p className={Styles.text}><
        span className={Styles.icon}>{ratings}</span>
        {rating}
      </p>
    </div>
    <div className={Styles.review}>
      <div className={Styles.text}>
        {content && (
          <ShowMoreText
            lines={4}
            more='Show more'
            less='Show less'
            anchorClass="anchor"
          >
            {content}
          </ShowMoreText>
        )}
      </div>
    </div>
    <p className={Styles.textSmall}>{author}</p>
  </div>
);

export default Review;
