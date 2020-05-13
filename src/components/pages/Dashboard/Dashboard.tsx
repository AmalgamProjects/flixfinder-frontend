import * as React from 'react';
import { Movies, Layout, Slider } from '../../containers';

const Dashboard: React.FC = () => (
  <Layout>
    <Slider />
    <Movies />
  </Layout>
);

export default Dashboard;
