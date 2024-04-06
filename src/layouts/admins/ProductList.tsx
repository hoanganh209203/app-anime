import React, { useEffect, useState } from 'react'
import productType from '../../interface/product'
import { Link, NavLink } from 'react-router-dom'
import { getAllProduct } from '../../services/products'
import { Button, Popconfirm } from 'antd'

const ProductList = () => {
  const confirm = () => {
    console.log();
  };

  const cancel = () => {
    console.log();
  };
  const [products, setProducts] = useState<productType[]>([])
  console.log(products);

  useEffect(() => {
    (async () => {
      const products: productType[] = await getAllProduct();
      setProducts(products);
    })();
  }, [])
  return (
    <div className="overflow-x-auto">
      <Link className="mb-3" to="/admin/add">
        <button className="px-3 h-10 mb-6 bg-blue-600 hover:bg-blue-400 rounded-md text-black font-semibold">
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
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {products.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 text-sm text-[#333]">
                <img
                  className="w-20 h-20 object-cover"
                  src={item.thumbnail}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 text-sm text-[#333] whitespace-normal">
                {item.title}
              </td>
              <td className="px-6 py-4 text-sm text-[#333]">
                {item.category?.name}
              </td>
              <td className="px-6 py-4 text-sm text-[#333]">
                {item.price}
              </td>
              <td className="px-6 py-4 text-sm text-[#333] whitespace-normal">
                {item.description}
              </td>
              <td className="px-6 py-4 text-sm text-[#333]">
                <button className="text-blue-500 hover:text-blue-700 mr-4"><Link to={`/admin/edit/${item._id}`}>Edit</Link></button>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Delete</Button>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList