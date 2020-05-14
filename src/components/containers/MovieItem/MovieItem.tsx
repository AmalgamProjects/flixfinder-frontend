import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../../../types/redux';
import { IMovie } from '../../../types/movie';
import { IUserData } from '../../../types/userData';
import { IAddToWatchlistParams, IMarkAsWatchedParams } from '../../../api/userData';
import { addToWatchlist, markAsWatched } from '../../../redux/userData/actions';
import Styles from './MovieItem.module.scss';
import cx from 'classnames';
import { relative } from 'path';
import { heart, check } from '../../../assets/icons';

interface IOwnProps {
  movie: IMovie;
}
interface IConnectedProps { state: IUserData; }
interface IConnectedDispatchProps {
  onAddToWatchList: typeof addToWatchlist;
  onMarkAsWatched: typeof markAsWatched;
}
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class MovieItem extends Component<Props> {
  handleAddToWatchlist = () => {
    const { movie, onAddToWatchList, state } = this.props;
    onAddToWatchList({ title: movie.title, user: state.username });
  };

  handleMarkAsWatched = () => {
    const { movie, onMarkAsWatched, state } = this.props;
    onMarkAsWatched({ title: movie.title, user: state.username });
  };

  render() {
    const { movie } = this.props;
    const movieCover = movie.imageUrl ? movie.imageUrl : 'https://images.fineartamerica.com/images-medium-large-5/no051-my-mad-max-minimal-movie-poster-chungkong-art.jpg';
    const buttonTopClassNames = cx({
      [Styles.button]: true,
      [Styles.buttonTop]: true
    });

    const buttonBottomClassNames = cx({
      [Styles.button]: true,
      [Styles.buttonBottom]: true
    });

    return (
      <div className={Styles.wrapper}>
        <Link className={Styles.link} to={`/movie/${movie.title}`}>
          <span className={Styles.innerLink}>
            <button className={buttonTopClassNames} onClick={this.handleAddToWatchlist}>
              <span className={Styles.icon}>{heart}</span>
            </button>
            <button className={buttonBottomClassNames} onClick={this.handleMarkAsWatched}>
              <span className={Styles.icon}>{check}</span>
            </button>
            <img className={Styles.cover} src={movieCover} alt={movie.title} />
          </span>
          <span className={Styles.title}>{movie.title}</span>
        </Link>
      </div>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.UserData,
  }),
  (dispatch: Dispatch) => ({
    onAddToWatchList: (params: IAddToWatchlistParams) => dispatch(addToWatchlist(params)),
    onMarkAsWatched: (params: IMarkAsWatchedParams) => dispatch(markAsWatched(params)),
  }),
)(MovieItem);
