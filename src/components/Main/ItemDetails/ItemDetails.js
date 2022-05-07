import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {

  const { id } = useParams();
  const [item, setItem] = useState({});
  const { _id, name, img, price, description, supplierName } = item;

  let {quantity} = item;

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);

  const handleDelivered = (id) =>{
    if(quantity > 1) {
      quantity = quantity - 1;
      const updatedQuantity = {quantity};
      item.quantity = quantity;

      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity)
      })
    }

    else if(quantity === 1){
      quantity = 'Sold Out';
      const updatedQuantity = {quantity};

      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity)
      })
    }
  };

  const handleAdd = (event) =>{
    event.preventDefault();
    const AddedQuantity = event.target.number.value;

    if (quantity === 'Sold Out'){
      quantity = parseInt(AddedQuantity);
    }
    else{
      quantity = quantity + parseInt(AddedQuantity);
    }

    const updatedQuantity = {quantity}

    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity)
    })
    event.target.reset();
  }

  return (
    <div className="m-3 p-3 text-start">
      <div className="d-flex p-2">
        <div className="card w-50 shadow-lg border-0 p-3">
          <h1 className="text-center text-danger mb-5">Item Details</h1>
          <div className="d-flex">
            <div>
            <img src={img} height={200} className="card-img-top w-100 mx-auto" alt="..." />
            </div>
            <div className="p-3">
            <h4 className="card-title">Brand: {name}</h4>
            <h4>Price: ${price}</h4>
            <h6 className="card-title">Supplier: {supplierName}</h6>
            <h4 className="fw-bold text-primary">Quantity: {quantity}</h4>
            </div>
          </div>
          <div className="card-body text-center">
            <p className="card-text">{description}</p>
            <button onClick={handleDelivered} className="btn btn-primary mt-3">
                Delivered
              </button>
          </div>
        </div>
        <div className="w-50 mx-auto ms-2 border-0">
        <h1 className="text-center text-info">Re-Stock Item</h1>
          <form onSubmit={handleAdd} className="row g-3">
            <div className=" w-50 mx-auto">
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="Input Number of Quantity"
              />
              <button className="btn btn-primary mt-3">
                Apply Stock
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
