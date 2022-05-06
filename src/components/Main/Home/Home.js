import React from 'react';
import BannerHome from '../BannerHome/BannerHome';
import Items from '../Items/Items';
import UpcomingStock from '../UpcomingStock/UpcomingStock';

const Home = () => {
  return (
    <div>
      <BannerHome></BannerHome>
      <Items></Items>
      <UpcomingStock></UpcomingStock>

    </div>
  );
};

export default Home;