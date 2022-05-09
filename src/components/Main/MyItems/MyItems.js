import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const MyItems = () => {
  const [user, loading] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  
        useEffect(()=>{   
          const getMyItems = async () => { 
            const email = user.email;     
            const url = `http://localhost:5000/myitems?email=${email}`;
              try{
                  const {data} = await axios.get(url ,{
                      headers: {
                          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                      }
                  });
                  setItems(data);
                }
                  catch (error){
                      console.log(error.message);
                  if (error.response.status === 401 || error.response.status === 403) {
                  signOut(auth);
                  navigate("/login");
                  }
              }
          }
              getMyItems();
      },[user])

  if (loading) {
    return <Spinner animation="grow" variant="dark" />;
  }


  const handleDelete = id =>{
      const proceed = window.confirm('Are you sure?');
      if(proceed){
          const url = `http://localhost:5000/inventory/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              const remaining = items.filter(item => item._id !== id);
              setItems(remaining);
          })
      }
  }

  return (
    <div className='container'>
            <h1 className='text-center text-white bg-info w-50 mx-auto p-2 m-2 rounded'>My Items : {items.length}</h1>
            <table className="table border border-dark border-3">
                <thead>
                    <tr>
                        {/* <th scope="col">Serial No.</th> */}
                        <th scope="col">Brand Name</th>
                        <th scope="col">Price($)</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier Name</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                {
                    items.map(item =>
               
                <tbody >
                
                            <tr key={item._id}>
                                <th scope="row">{item.name}</th>
                               
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplierName}</td>
                                
                                <td onClick={() => handleDelete(item?._id)}>
                                  <button className='border-0 bg-primary rounded text-white fw-bold p-2'>Delete</button>
                                </td>
                            </tr>
                </tbody>
                    )}

            </table>
    </div>
  );
};

export default MyItems;