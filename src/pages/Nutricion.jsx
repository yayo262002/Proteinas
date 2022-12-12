
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Nav.scss";

const Nutricion = () => {
  const BASEURL ="http://localhost:8000";
  const [productos, setproductos] = useState([]);

useEffect(()=> {

  const getData = async () => {
      const {data}= await axios.get(`${BASEURL}/proteinas`);
    console.log(productos);
      setproductos(data)
      console.log(data);
      
  };
  getData();

},[]);
  return (
<>
<div>
            {productos.map((Producto, index)=> 
            <div key={index}>

                <div>
                    <img src={Producto.productImage} alt="" />
                </div>
                <div>
                    <h1>{Producto.productName}</h1>
                    <img src={Producto.photo}></img>
                </div>
            </div>
            )}
        </div>
    </>
  )
}

export default Nutricion