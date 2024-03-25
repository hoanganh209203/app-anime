import React, { useEffect, useState } from 'react'
import productType from '../../interface/product'
import { Link } from 'react-router-dom'

type Props = {}

const ProductList = (props: Props) => {
    const [product , setProduct] = useState<productType[]>([])
    useEffect(()=>{
        fetch(`http://localhost:8000/products`)
        .then(response => response.json())
        .then((data) =>{
            setProduct(data)
        })
    },[])
  return (
    <div className="bg-white  rounded-xl p-5">
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Admin Product List</h2>
      </div>
      <Link className="mb-3" to="/admin/add">
        <button className="px-3 h-10 bg-green-600 hover:bg-green-400 rounded-md text-black font-semibold">
          Add new products
        </button>
      </Link>
      <table className="table-auto mt-5">
        <thead>
          <tr>
            <th>Image</th>
            <th className="w-[300px] text-start">Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {product.map((item)=>(
    <tr key={item.id}>
    <td>
      <img
        className="w-20 h-20 object-cover"
        src={item.thumbnail}
        alt=""
      />
    </td>
    <th>{item.title}</th>
    <td>{item.price}</td>
    {/* {item.categoryId.map((cate)=>(
        <td>
            {cate.title}
        </td>
    ))} */}
     <td>{item.category}</td>
    <td>
      <p className="overflow-hidden text-ellipsis h-12">
        {item.description}
      </p>
    </td>
  </tr>
  ))}
 
 </tbody>
      </table>
    </div>
  )
}

export default ProductList