import React, { useEffect, useState } from 'react'
import productType from '../../interface/product'
import { Link } from 'react-router-dom'
import { DeleteProduct, getAllProduct } from '../../services/products'
import { Button, Popconfirm } from 'antd'

const ProductList = () => {
  
  const [products, setProducts] = useState<productType[]>([])
  console.log(products);

  useEffect(() => {
    (async () => {
      const products: productType[] = await getAllProduct();
      setProducts(products);
    })();
  }, [])

  const delProduct = async(_id:string) =>{
    let mess = window.confirm('Are you sure?')
    if(mess){
       try {
        await DeleteProduct(_id)
        const Product = products.filter((Product:productType) => Product._id !== _id)
        setProducts(Product)
       } catch (error) {
        console.log(error);
       }
    }
}

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
                  onConfirm={() => delProduct(item._id as string)}
                  okText="Yes"
                  cancelText="No"
                  okType={"danger"}
                >
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
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