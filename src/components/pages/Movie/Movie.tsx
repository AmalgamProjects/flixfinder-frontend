import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Layout, MovieDetails } from '../../containers';

interface IOwnProps {}

class Movie extends React.Component<IOwnProps & RouteComponentProps<{ id: string }>> {
  render() {
    const { match } = this.props;
    const { params } = match;

    return (
      <Layout>
        <MovieDetails movieId={params.id} />
      </Layout>
    );
  }
}

export default withRouter(Movie);
