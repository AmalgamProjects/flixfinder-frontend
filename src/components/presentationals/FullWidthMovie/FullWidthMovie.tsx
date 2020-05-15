import * as React from 'react';
import cx from 'classnames';
import Styles from './FullWidthMovie.module.scss';
import { Container } from '../../containers';
import { MovieDetails, Image, TileButton } from '..';
import movieTestPoster from '../../../assets/images/movie-poster-test.jpg';
import { heart, check } from '../../../assets/icons';

interface IOwnProps {
  isSingleMovie?: boolean;
  title: string;
  background: string;
  details: string;

  director?: string;
  starring?: string;
  writer?: string;

  onAddToWatchlist?: () => void;
  onMarkAsWatched?: () => void;
}

const FullWidthMovie: React.FC<IOwnProps> = ({
  director,
  starring,
  writer,
  isSingleMovie,
  details,
  background,
  title,
  onAddToWatchlist,
  onMarkAsWatched,
}) => {
  const wrapperClassNames = cx({
    [Styles.wrapper]: true,
    [Styles.wrapperSingleMovie]: isSingleMovie,
  });

  const innerWrapperClassNames = cx({
    [Styles.innerWrapper]: true,
    [Styles.innerWrapperSingleMovie]: isSingleMovie,
  });

  const contentClassNames = cx({
    [Styles.content]: true,
    [Styles.contentSingleMovie]: isSingleMovie,
  });

  const detailsClassNames = cx({
    [Styles.details]: true,
    [Styles.detailsSingleMovie]: isSingleMovie,
  });

  return (
    <div className={wrapperClassNames} style={{ backgroundImage: `url(${background})` }}>
      <div className={innerWrapperClassNames}>
        <Container>
          <div className={contentClassNames}>
            <div className={Styles.poster}>
              <Image alt="poster" url={movieTestPoster} />
            </div>
            <div className={detailsClassNames}>
              {onAddToWatchlist && onMarkAsWatched && (
                <div className={Styles.buttons}>
                  <TileButton expanded onClick={onAddToWatchlist} label="Add to watchlist" icon={heart} />
                  <TileButton expanded onClick={onMarkAsWatched} label="Marked as watched" icon={check} />
                </div>
              )}
              <MovieDetails
                title={title}
                details={details}
                isSingleMovie={isSingleMovie}
                director={director}
                starring={starring}
                writer={writer}
              />
              <div />
            </div>
          </div>
        </Container>
      </div>
    </div >
  )
};

export default FullWidthMovie;
