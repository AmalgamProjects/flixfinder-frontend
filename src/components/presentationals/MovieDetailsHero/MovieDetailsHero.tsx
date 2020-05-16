import * as React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import cx from 'classnames';
import { ratings } from '../../../assets/icons';
import Styles from './MovieDetailsHero.module.scss';

interface IOwnProps {
  isSingleMovie?: boolean;
  details: string | null;
  director?: string | null;
  starring?: string;
  writer?: string;
  title: string;
  summary: string | null;
  rating?: string;
  url?: string;
}

const MovieDetailsHero: React.SFC<IOwnProps> = ({ writer, starring, director, isSingleMovie, details, title, rating, summary, url }) => {
  const textClassNames = cx({
    [Styles.text]: true,
    [Styles.textSingleMovie]: isSingleMovie,
  });

  const titleClassNames = cx({
    [Styles.title]: true,
    [Styles.titleSingleMovie]: isSingleMovie,
  });

  return (
    <div>
      {!url && (
        <h2 className={titleClassNames}>{title}</h2>
      )}
      {url && (
        <Link className={Styles.link} to={url}>
          <h2 className={titleClassNames}>{title}</h2>
        </Link>
      )}
      <div className={Styles.moreDetails}>
        <div className={Styles.textWrapper}>
          {details && <p className={textClassNames}>{details}</p>}
        </div>
        <div className={Styles.rating}>
          <div className={Styles.textWrapper}>
            {rating && (
              <p className={textClassNames}>
                <span className={Styles.ratingIcon}>{ratings}</span> {rating}/10
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={Styles.textWrapper}>
        {summary && (
          <div className={textClassNames}>
            <ShowMoreText
              lines={4}
              more='Show more'
              less='Show less'
              anchorClass="anchor-details"
            >
              {summary}
            </ShowMoreText>
          </div>
        )}
      </div>
      {director && <p className={textClassNames}><span className={Styles.textBold}>Director:</span> {director}</p>}
      {writer && <p className={textClassNames}><span className={Styles.textBold}>Writer:</span> {writer}</p>}
      {starring && <p className={textClassNames}><span className={Styles.textBold}>Starring:</span> {starring}</p>}
    </div>
  );
};

export default MovieDetailsHero;
