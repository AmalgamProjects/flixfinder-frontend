import * as React from 'react';
import cx from 'classnames';
import Styles from './MovieDetails.module.scss';
import { ratings } from '../../../assets/icons';

interface IOwnProps {
  isSingleMovie?: boolean;
  details: string;
  director?: string | null;
  starring?: string;
  writer?: string;
  title: string;
  summary: string | null;
  rating: string;
}

const MovieDetails: React.SFC<IOwnProps> = ({ writer, starring, director, isSingleMovie, details, title, rating, summary }) => {
  const textClassNames = cx({
    [Styles.text]: true,
    [Styles.textSingleMovie]: isSingleMovie
  });

  const titleClassNames = cx({
    [Styles.title]: true,
    [Styles.titleSingleMovie]: isSingleMovie
  });

  return (
    <div>
      <h2 className={titleClassNames}>{title}</h2>
      <div className={Styles.moreDetails}>
        <div className={Styles.textWrapper}>
          <p className={textClassNames}>{details}</p>
        </div>
        <div className={Styles.rating}>
          <div className={Styles.textWrapper}>
            <p className={textClassNames}><span className={Styles.ratingIcon}>{ratings}</span> {rating}/10</p>
          </div>
        </div>
      </div>
      <div className={Styles.textWrapper}>
        {summary && <p className={textClassNames}>{summary}</p>}
      </div>
      {director && <p className={textClassNames}><span className={Styles.textBold}>Director:</span> {director}</p>}
      {writer && <p className={textClassNames}><span className={Styles.textBold}>Writer:</span> {writer}</p>}
      {starring && <p className={textClassNames}><span className={Styles.textBold}>Starring:</span> {starring}</p>}
    </div>
  );
};

export default MovieDetails;
