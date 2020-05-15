import React, { Component } from 'react';
import cx from 'classnames';
import Styles from './FullWidthMovie.module.scss';
import { Container } from '../../containers';
import { MovieDetails, Image, TileButton, Spinner } from '..';
import { heart, check } from '../../../assets/icons';
import { IMovie } from '../../../types/movie';

interface IOwnProps {
  isSingleMovie?: boolean;
  movie: IMovie;
  isLoading: boolean;
  onAddToWatchlist?: () => void;
  onMarkAsWatched?: () => void;
}

class FullWidthMovie extends Component<IOwnProps> {
  render() {
    const { onAddToWatchlist, onMarkAsWatched, isSingleMovie, movie, isLoading } = this.props;
    const { title, image_url, poster_url, averageRating, directors, endYear, genres, moviedb, primaryTitle, principals, rapid, runtimeMinutes, startYear, titleType, summary, backdrop_url, numVotes, tastedb, wikipedia_url, writers, youtube_url } = movie;

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
        {isLoading &&
          <div className={Styles.loader}>
            <Spinner />
          </div>}
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
                    <TileButton expanded onClick={onMarkAsWatched} label="Marked as watched" icon={check} />
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
