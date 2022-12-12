
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nutricion from './pages/Nutricion';
import Home from './pages/Home';
import Footer from './pages/Footer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
  const [products,setProducts] = useState([]);
  const BASEURL ="http://localhost:8000";
  useEffect(()=> {

    const getData = async () => {
        const {data}= await axios.get(`${BASEURL}/proteinas/${products}`);

        setProducts(data)
        
    };
    getData();
},[]);

useEffect(()=>{
  async function getData() {
      const {data} = await axios.get('http://localhost:8000')
      setProducts(data);
      console.log(data);
  }getData() 

},[])

  return (
    <Router>
    <Nav/>
  
    <Routes>
    
    <Route path='/'element={<Home/>} />
      <Route path='/nutricion'element={<Nutricion/>} />
      
    </Routes>
    <Footer></Footer>
  </Router>
  );
}

export default App;
