import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from '../../../redux/userData/actions';
import { IRootState } from '../../../types/redux';
import { MoviesSectionList, Empty } from '../../presentationals';
import { IUserData } from '../../../types/userData';
import { check } from '../../../assets/icons';
import Styles from './AlreadyWatched.module.scss';

interface IOwnProps { }
interface IConnectedProps { state: IUserData; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class AlreadyWatched extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { seen } = this.props.state;

    return (
        <Fragment>
          {seen && seen.length > 0 && (
            <MoviesSectionList movies={seen} title="Movies" />
          )}
          {(!seen || !seen.length) && (
            <Empty>
              <p className={Styles.text}>
                You currently have no movies or TV shows in your Already Watched list.
              </p>
              <p className={Styles.text}>
                You can mark items as watched by clicking the
                <span className={Styles.icon}>{check}</span> icon<br />
                on any item in your recommended lists.
              </p>
            </Empty>
          )}
        </Fragment>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.UserData,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: () => dispatch(loadData()),
  }),
)(AlreadyWatched);
