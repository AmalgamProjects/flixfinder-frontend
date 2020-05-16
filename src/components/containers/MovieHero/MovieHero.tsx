import React, { Component } from 'react';
import { Dispatch } from 'redux';
import cx from 'classnames';
import { connect } from 'react-redux';
import { MovieDetailsHero, Image, TileButton } from '../../presentationals';
import { heart, check } from '../../../assets/icons';
import { IMovie } from '../../../types/movie';
import { loadData } from '../MovieDetails/actions';
import { IMovieDetailsState } from '../MovieDetails/reducers';
import { IRootState } from '../../../types/redux';
import { IFetchMovieDetailsParams } from '../../../api/movies';
import { Container } from '..';
import Styles from './MovieHero.module.scss';

interface IOwnProps {
  isSingleMovie?: boolean;
  movie: IMovie;
  movieId?: string;
  onAddToWatchlist?: () => void;
  onMarkAsWatched?: () => void;
  isAddToWatchlistLoading?: boolean,
  isMarkAsWatchedLoading?: boolean,
}

interface IConnectedDispatchProps {
  onLoadData: typeof loadData;
}
interface IConnectedProps { state: IMovieDetailsState }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class MovieHero extends Component<Props> {
  componentDidMount() {
    const { onLoadData, movieId, movie } = this.props;

    console.log('did mount');

    if (!movie && movieId) {
      console.log('load pick');
      onLoadData({ id: movieId });
    }
  }

  render() {
    const {
      onAddToWatchlist,
      onMarkAsWatched,
      isSingleMovie,
      movie,
      isAddToWatchlistLoading,
      isMarkAsWatchedLoading,
    } = this.props;

    const { image_url, poster_url, averageRating, genres, primaryTitle, runtimeMinutes, startYear, summary, backdrop_url } = movie;

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

      if (!genres) {
        return null;
      }

      return `${runtimeMinutes && `${runtimeMinutes}min |`} ${formattedGenres && `${formattedGenres} |`} ${startYear && `${startYear}`}`;
    }

    return (
      <div className={wrapperClassNames} style={{ backgroundImage: `url(${isSingleMovie ? image_url : backdrop_url})` }}>
        <div className={innerWrapperClassNames}>
          <Container>
            <div className={contentClassNames}>
              {poster_url && <div className={Styles.poster}>
                <Image alt="poster" url={poster_url} />
              </div>}
              <div className={detailsClassNames}>
                {onAddToWatchlist && onMarkAsWatched && (
                  <div className={Styles.buttons}>
                    <TileButton
                      expanded
                      isLoading={isAddToWatchlistLoading}
                      onClick={onAddToWatchlist}
                      label="Add to watchlist"
                      icon={heart}
                    />
                    <TileButton
                      expanded
                      isLoading={isMarkAsWatchedLoading}
                      onClick={onMarkAsWatched}
                      label="Mark as watched"
                      icon={check}
                    />
                  </div>
                )}
                <MovieDetailsHero
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
    );
  }
};

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.MovieDetailsReducer,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: (params: IFetchMovieDetailsParams) => dispatch(loadData(params)),
  }),
)(MovieHero);
