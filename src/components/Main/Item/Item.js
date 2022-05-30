import React from "react";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const { _id, name, img, price, description, quantity, supplierName } =
    props.item;

  const navigate = useNavigate();

  const navigateItems = (id) => {
    navigate(`/inventory/${id}`);
  };

  
  
  return (
    <div className="col mt-5">
      <div className="card ms-4 shadow-lg border-0">
        <img src={img} className="card-img-top p-4" alt="..." />
        <div className="card-body">
          <h6 className="card-title fw-bold">Laptop: {name}</h6>
          <h5 className="card-title">Supplier: {supplierName}</h5>
          <h6>Price: ${price}</h6>
          <h6>Quantity: {quantity}</h6>
          <p className="card-text text-start">{description}</p>
          <button onClick= {()=> navigateItems(_id)} className="border-0 bg-primary w-100 rounded text-white fw-bold p-2">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
