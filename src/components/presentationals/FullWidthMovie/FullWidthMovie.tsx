import React, { Component } from 'react';
import cx from 'classnames';
import Styles from './FullWidthMovie.module.scss';
import { Container } from '../../containers';
import { MovieDetails, Image, TileButton } from '..';
import { heart, check } from '../../../assets/icons';
import { IMovie } from '../../../types/movie';

interface IOwnProps {
  isSingleMovie?: boolean;
  movie: IMovie;
  onAddToWatchlist?: () => void;
  onMarkAsWatched?: () => void;
}

class FullWidthMovie extends Component<IOwnProps> {
  render() {
    const { onAddToWatchlist, onMarkAsWatched, isSingleMovie, movie } = this.props;
    // eslint-disable-next-line camelcase
    const { image_url, poster_url, averageRating, genres, primaryTitle, runtimeMinutes, startYear, summary } = movie;

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

    const getMovieDetails = () => {
      const formattedGenres = genres && genres.join(', ');

      return `${runtimeMinutes && `${runtimeMinutes}min |`} ${formattedGenres && `${formattedGenres} |`} ${startYear && `${startYear}`}`;
    }

    return (
      <div className={wrapperClassNames} style={{ backgroundImage: `url(${image_url})` }}>
        <div className={innerWrapperClassNames}>
          <Container>
            <div className={contentClassNames}>
              {poster_url && <div className={Styles.poster}>
                <Image alt="poster" url={poster_url} />
              </div>}
              <div className={detailsClassNames}>
                {onAddToWatchlist && onMarkAsWatched && (
                  <div className={Styles.buttons}>
                    <TileButton expanded onClick={onAddToWatchlist} label="Add to watchlist" icon={heart} />
                    <TileButton expanded onClick={onMarkAsWatched} label="Mark as watched" icon={check} />
                  </div>
                )}
                <MovieDetails
                  title={primaryTitle}
                  details={getMovieDetails()}
                  isSingleMovie={isSingleMovie}
                  // director={'directors'}
                  // starring={'starring'}
                  // writer={'writer'}
                  rating={averageRating}
                  summary={summary}
                />
                <div />
              </div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
};

export default FullWidthMovie;
