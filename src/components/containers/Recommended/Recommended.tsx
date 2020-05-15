import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loadData } from '../../../redux/userData/actions';
import { IRootState } from '../../../types/redux';
import { MoviesSectionList } from '../../presentationals';
import { IUserData } from '../../../types/userData';
import Styles from './Recommended.module.scss';

interface IOwnProps {
  title: string;
  path?: string;
}
interface IConnectedProps { state: IUserData; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps;

class Recommended extends Component<Props> {
  componentDidMount() {
    const { onLoadData } = this.props;
    onLoadData();
  }

  render() {
    const { title, path } = this.props;
    const { recommended } = this.props.state;

    return (
      <div className={Styles.wrapper}>
        <MoviesSectionList movies={recommended} title={title} path={path} />
      </div>
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
)(Recommended);
