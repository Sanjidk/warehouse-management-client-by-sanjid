import React from 'react';
import './Animation.css';
import apple from '../../../img/item/apple3.png';
import apple1 from '../../../img/item/apple2.png';
import dell from '../../../img/item/dell3.png';
import hp from '../../../img/item/hp3.png';

const Animation = () => {
  return (
    <div className='mt-3'>
  <h1 className="text-center fw-bold text-white bg-info p-2"> &#9830; Most Stocked Product &#9830; </h1>

<div  className="buttom-img" >
  <img src={apple} alt="" />
  <img src={apple1} alt="" />
  <img src={dell} alt="" />
  <img src={hp} alt="" />

</div>
    </div>
  );
};

export default Animation;