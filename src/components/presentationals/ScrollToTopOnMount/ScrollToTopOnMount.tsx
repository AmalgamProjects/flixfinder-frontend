import { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface IOwnProps {}
type Props = IOwnProps & RouteComponentProps;

class ScrollToTopOnMount extends Component<Props> {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }

  componentDidUpdate(prevProps: Props) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return null;
  }
}

export default withRouter(ScrollToTopOnMount);
