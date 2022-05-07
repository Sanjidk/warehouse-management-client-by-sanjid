import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddItem.css";

const Additem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);

    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  };

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center text-dark mb-3 fw-bold fs-5">
                  ADD YOUR LAPTOP
                </h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-floating mb-3">
                    <input
                      {...register("name")}
                      type="text"
                      className="form-control"
                      placeholder="Laptop Name"
                      required
                    />
                    <label>Laptop Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      {...register("supplierName")}
                      type="text"
                      className="form-control"
                      placeholder="Supplier Name"
                      required
                    />
                    <label>Supplier Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      {...register("price")}
                      type="number"
                      className="form-control"
                      placeholder="Price"
                      required
                    />
                    <label>Price</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      {...register("quantity")}
                      type="number"
                      className="form-control"
                      placeholder="Quantity"
                      required
                    />
                    <label>Quantity</label>
                  </div>
                  <textarea
                    {...register("description")}
                    className="form-control"
                    placeholder="Description"
                    required
                    name=""
                    id=""
                    cols="45"
                    rows="3"
                  ></textarea>

                  <div class="my-3">
                    <input
                      {...register("img")}
                      class="form-control"
                      type="file"
                      id="formFile"
                      required
                    />
                  </div>

                  <div className="d-grid mb-2">
                    <Button variant="primary" type="submit">
                      Confirm
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additem;
