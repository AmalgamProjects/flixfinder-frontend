import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { loadData } from './actions';
import { IRootState } from '../../../types/redux';
import { MoviesSectionList, Spinner } from '../../presentationals';
import { ISearchPageState } from './reducers';
import { ISearchParams } from '../../../api/search';
import { Layout } from '../../containers';
import Styles from './Search.module.scss';

interface IOwnProps {}
interface IConnectedProps { state: ISearchPageState; }
interface IConnectedDispatchProps { onLoadData: typeof loadData; }
type Props = IOwnProps & IConnectedProps & IConnectedDispatchProps & RouteComponentProps<{ term: string }>;

class Search extends Component<Props> {
  componentDidMount() {
    const { onLoadData, match } = this.props;
    onLoadData({ search: match.params.term });
  }

  componentDidUpdate(prevProps: Props) {
    const { onLoadData, match } = this.props;

    if (match.params.term !== prevProps.match.params.term) {
      onLoadData({ search: match.params.term });
    }
  }

  render() {
    const { results, isLoading } = this.props.state;
    const { match } = this.props;

    return (
      <Layout>
        {isLoading && (
          <div className={Styles.loader}>
            <Spinner color="dark" />
          </div>
        )}
        {/* eslint-disable-next-line camelcase */}
        {!isLoading && (
          <MoviesSectionList movies={results} title={`Search results for '${match.params.term}'`} />
        )}
        {!isLoading && results.length === 0 && (
            <div className={Styles.empty}>
              Sorry, please try again we were not able to find a movie by : '{match.params.term}'
            </div>
        )}
      </Layout>
    );
  }
}

export default connect<IConnectedProps, IConnectedDispatchProps, IOwnProps, IRootState>(
  (state: IRootState) => ({
    state: state.SearchPage,
  }),
  (dispatch: Dispatch) => ({
    onLoadData: (params: ISearchParams) => dispatch(loadData(params)),
  }),
)(withRouter(Search));
