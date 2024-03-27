import React, { useEffect, useState } from 'react'
import productType from '../../interface/product'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const ProductList = (props: Props) => {
  const [product, setProduct] = useState<productType[]>([])
  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then(response => response.json())
      .then((data) => {
        setProduct(data)
      })
  }, [])
  return (
    <div className="overflow-x-auto">
      <Link className="mb-3" to="/admin/add">
         <button className="px-3 h-10 bg-green-600 hover:bg-green-400 rounded-md text-black font-semibold">
          Add new products
         </button>
      </Link>
    <table className="min-w-full divide-y divide-gray-200 font-[sans-serif]">
        <thead className="bg-gray-100 whitespace-nowrap">
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
            </th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
            </th>
        </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
        {product.map((item) => (
        <tr key={item.id}>
            <td className="px-6 py-4 text-sm text-[#333]">
            <img
                className="w-20 h-20 object-cover"
           src={item.thumbnail}
         alt=""
        />
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
            {item.title}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
            {item.category}
            </td>
            <td className="px-6 py-4 text-sm text-[#333] whitespace-normal">
            {item.description}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
            <button className="text-blue-500 hover:text-blue-700 mr-4"><NavLink to={`/admin/edit`}>Edit</NavLink></button>
            <button className="text-red-500 hover:text-red-700">Delete</button>
            </td>
        </tr>
        ))}
        </tbody>
    </table>
    </div>
  )
}

export default ProductList