import * as React from 'react';
import { Layout, Container } from '../../containers';
import Styles from './NotFountRoute.module.scss';

const NotFountRoute: React.FC = () => (
  <Layout>
    <Container>
      <h1 className={Styles.text}>404 We couldn't find this page.</h1>
    </Container>
  </Layout>
);

export default NotFountRoute;
