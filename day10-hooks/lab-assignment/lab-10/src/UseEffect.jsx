import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const UseEffect = () => {
    const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  });
return(
    <>
          <h1>product</h1>
       {
        data.map((i)=> (
          <>
          <div className="col-md-4 mb-4" style={{display:"flex"}} key={i.id}>
        <div className="card h-100 shadow-sm">
          <img src={i.image} className="card-img-top" alt={i.title} style={{ height: '200px', objectFit: 'contain' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{i.title}</h5>
            <p className="card-text">${i.price}</p>
            <div className="mt-auto">
              <button className="btn btn-primary w-100">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      </>
        ))
       }
    </>
)
};

export default UseEffect;
