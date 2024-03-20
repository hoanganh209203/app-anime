import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import ProductPage from './layouts/home/products';
import Dashboard from './layouts/dashboard';
import Homepage from './layouts/home/homepage';
import Details from './layouts/home/details';
import TemlateDemo from './components/demo';
import './App.css'
function App() {
  
  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route path='' Component={Homepage}></Route>
        <Route path='details/:id' Component={Details}></Route>
        <Route path='demo' Component={TemlateDemo}></Route>
      <Route path='products' Component={ProductPage}></Route>
      </Route>
      <Route path='dashboard' Component={Dashboard}></Route>
    </Routes>
  );


}

export default App;
