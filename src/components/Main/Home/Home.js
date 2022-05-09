import React from 'react';
import { Spinner } from 'react-bootstrap';
import Animation from '../Animation/Animation';
import BannerHome from '../BannerHome/BannerHome';
import Items from '../Items/Items';
import UpcomingStock from '../UpcomingStock/UpcomingStock';

const Home = () => {

let loading;

  if (loading) {
    return <Spinner animation="grow" variant="dark" />;
  }

  return (
    <div>
      <BannerHome></BannerHome>
      <Items></Items>
      <Animation></Animation>
      <UpcomingStock></UpcomingStock>

    </div>
  );
};

export default Home;