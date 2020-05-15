import * as React from 'react';
import { Layout, Slider, Recommended } from '../../containers';

const Dashboard: React.FC = () => (
  <Layout>
    <Slider />
    <Recommended limit={6} title="Recommended Movies" path="/reccomended-movies" />
    <Recommended limit={6} title="Recommended TV Shows" path="/reccomended-tv-shows" />
  </Layout>
);

export default Dashboard;
