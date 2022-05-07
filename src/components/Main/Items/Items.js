import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Item/Item';


const Items = () => {
  const [items]=useItems();
  const newItem = items.slice(0,6);
  return (
    <div id='items'>
      <h1 className='fw-bold mt-5 text-center'>Laptop Items</h1>
      <div className='row row-cols-1 row-cols-md-3 w-100'>
      {
        newItem.map(item => <Item
        key={item.id}
        item={item}
        ></Item>)
      }
      </div>
    </div>
  );
};

export default Items;