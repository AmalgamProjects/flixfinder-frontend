import * as React from 'react';
import { Movies, Layout } from '../../containers';
import Slider from '../../containers/Slider/Slider';

const Dashboard: React.FC = () => (
  <Layout>
    <Slider />
    <Movies />
  </Layout>
);

export default Dashboard;
