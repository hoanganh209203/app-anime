import React, { useEffect, useState } from 'react'
import productType from '../interface/product';
type Props = {
    product:productType[]
};

const ListProductData = () => {
    const [productsData,setProductData] = useState([])
    const [page,setPage] =  useState(1)
console.log(productsData);

const buttonClick =()=>{
    setPage(page+1)
}
const buttonClickprev =()=>{
    setPage(page-1)
}
  useEffect(()=>{
    fetch(`http://localhost:8000/api/products`)
    .then((res)=>res.json())
    .then((data)=>{
        setProductData(data.data.docs);        
    });
      
  }, [page]);
    return productsData;
  };
  
  export default ListProductData;