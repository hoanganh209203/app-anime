import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CategoryType } from '../../interface/categorise'
import { FormProduct } from '../../interface/formProduct'
import { ErrorFormProduct } from '../../interface/errorsForm'
import productValidate from '../../validations/products'

const AddProduct = () => {
  const navgate = useNavigate()
  const [category , setCategory] = useState<CategoryType[]>([])
  useEffect(()=>{
    axios.get(`https://nodejs-fe.vercel.app/category`)
    .then((response) =>{
      setCategory(response.data)
    })
    
  },[]);

  const [addForm, setAddForm] = useState<FormProduct>({
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category:'',
    thumbnail: '',
    images: []
  })
  console.log(addForm);
  
  const [errorForm, setErrorForm] = useState<ErrorFormProduct>({})

  const handlChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "images") {
      const imagesArray = value.split(/[\n,]+/);

      // Cập nhật state addForm với mảng mới
      setAddForm(prevState => ({
        ...prevState,
        [name]: imagesArray
      }));
    } else {

      setAddForm({
        ...addForm,
        [name]: value
      })
    }
  }
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();

    const { errorMessage } = productValidate(addForm);
    if (errorMessage) {
      setErrorForm(errorMessage);
      return;
    }

    axios.post('https://nodejs-fe.vercel.app/products', addForm)
      .then(() => {
        alert("Created product successfully");
        navgate("/admin");
      }).catch((error) => {
        console.log(error);
      })
  };


  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-full">
      <div className="p-16">
        <div className="w-full px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-5 text-center">Add Product</h1>
          <form onSubmit={onSubmit} method="POST" className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
              <input
                onChange={handlChange} type="text" name="title" id="title"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.title && (
                <span className="text-sm text-red-400">* {errorForm.title}</span>
              )}
            </div>
            <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
              <input
                onChange={handlChange} type="text" name="thumbnail" id="thumbnail"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.thumbnail && (
                <span className="text-sm text-red-400">* {errorForm.thumbnail}</span>
              )}
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá</label>
              <input
                onChange={handlChange} type="number" name="price" id="price"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.price && (
                <span className="text-sm text-red-400">* {errorForm.price}</span>
              )}
            </div>
            <div>
              <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Phần trăm giảm giá</label>
              <input
                onChange={handlChange} type="number" name="discountPercentage" id="discountPercentage"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.discountPercentage && (
                <span className="text-sm text-red-400">* {errorForm.discountPercentage}</span>
              )}
            </div>
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Đánh giá</label>
              <input
                onChange={handlChange} type="number" name="rating" id="rating"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.rating && (
                <span className="text-sm text-red-400">* {errorForm.rating}</span>
              )}
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Tồn kho</label>
              <input
                onChange={handlChange} type="number" name="stock" id="stock"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.stock && (
                <span className="text-sm text-red-400">* {errorForm.stock}</span>
              )}
            </div>
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Thương hiệu</label>
              <input
                onChange={handlChange} type="text" name="brand" id="brand"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" />
              {errorForm?.brand && (
                <span className="text-sm text-red-400">* {errorForm.brand}</span>
              )}
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Danh mục</label>
              <select
            onChange={handlChange}
            name="category"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id=""
          >
            {category.map((cate)=>(
              <option key={cate._id} value={cate._id}>{cate.name}</option>
            ))}
          </select>
              {errorForm?.category && (
                <span className="text-sm text-red-400">* {errorForm.category}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <textarea
                id="images"
                name="images"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-vl border-gray-300 rounded-md"
                value={addForm.images?.join('\n')} // Chuyển đổi mảng thành một chuỗi, mỗi phần tử cách nhau bởi dấu xuống dòng
                onChange={handlChange}
              ></textarea>
              {errorForm?.images && (
                <span className="text-sm text-red-400">* {errorForm.images}</span>
              )}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
              <textarea
                onChange={handlChange} name="description" id="description" rows={3}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-12 shadow-sm sm:text-xl border-gray-300 rounded-md" defaultValue={""} />
              {errorForm?.description && (
                <span className="text-sm text-red-400">* {errorForm.description}</span>
              )}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Thêm sản phẩm</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default AddProduct