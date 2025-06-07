import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  });
return(
    <>
       {
        
       }
    </>
)
};

export default UseEffect;
