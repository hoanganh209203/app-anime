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
import ProductList from './layouts/admins/ProductList';
import ProductAdd from './layouts/admins/ProductAdd';
function App() {

  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route path='' Component={Homepage}></Route>
        <Route path='details/:id' Component={Details}></Route>
        <Route path='demo' Component={TemlateDemo}></Route>
        <Route path='products' Component={ProductPage}></Route>
      </Route>
      <Route path='admin' Component={Dashboard}>
      <Route index Component={ProductList}></Route>
      <Route path='add' Component={ProductAdd}></Route>
      </Route>
    </Routes>
  );


}

export default App;
