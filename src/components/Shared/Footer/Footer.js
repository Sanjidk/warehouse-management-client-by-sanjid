import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className='bg-dark text-white footer-div py-4'>
      <p className='m-0'>Copyright &#169; {year} Computer Warehouse by Mahmud Sanjid</p>
    </div>
  );
};

export default Footer;