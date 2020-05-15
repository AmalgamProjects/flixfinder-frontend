import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from '../../../redux/userData/actions';
import { IRootState } from '../../../types/redux';
import { MoviesSectionList, Empty } from '../../presentationals';
import { heart } from '../../../assets/icons';
import { IUserDataState } from '../../../redux/userData/reducer';
import Styles from './MyWatchlist.module.scss';

interface IOwnProps { }
interface IConnectedProps { state: IUserDataState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class MyWatchlist extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { watch } = this.props.state;

    return (
        <Fragment>
          {watch && watch.length > 0 && (
            <MoviesSectionList movies={watch} title="Movies" isWatchlist />
          )}
          {(!watch || !watch.length) && (
            <Empty>
              <p className={Styles.text}>
                You currently have no movies or TV shows in your watchlist.
              </p>
              <p className={Styles.text}>
                You can easily add items to your watchlist by clicking<br />
                the <span className={Styles.icon}>{heart}</span> icon on any item in your recommended lists.
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
)(MyWatchlist);
