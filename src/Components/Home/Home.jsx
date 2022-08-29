import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  <Helmet>
    <script src="/path/to/resource.js" type="text/javascript" />
  </Helmet>

  return (
    <div className='' style={{ height: '700px' }}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;