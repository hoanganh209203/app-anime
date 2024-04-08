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
import UpdateProduct from './layouts/admins/UpdateProduct';
import PrivateRouter from './PrivateRouter';
import Category from './layouts/home/Category';
function App() {
  let userLogin = false;
  let userinfo = sessionStorage.getItem("user")
    userinfo = JSON.parse(userinfo as any) 
    console.log(userinfo);     
    if (userinfo===null) {
      userLogin = false
    }
    else {
      userLogin = true
    }
  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route index Component={Homepage}></Route>
        <Route path='details/:id' Component={Details}></Route>
        <Route path='products/details/:id' Component={Details}></Route>
        <Route path='category/details/:id' Component={Details}></Route>
        <Route path='demo' Component={TemlateDemo}></Route>
        <Route path='products' Component={ProductPage}></Route>
        <Route path='category' Component={Category}/>
      </Route>
      <Route path='admin' element={<PrivateRouter user={userLogin}><Dashboard/></PrivateRouter>}>
      <Route index Component={ProductList}></Route>
      <Route path='add' Component={ProductAdd}></Route>
      <Route path='edit/:id' Component={UpdateProduct}></Route>
      </Route>
    </Routes>
  );


}

export default App;
