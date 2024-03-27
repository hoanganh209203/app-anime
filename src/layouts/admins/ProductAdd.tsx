import React, { useState } from 'react'

type Props = {}

const ProductAdd = (props: Props) => {
  const [title, setTitle] = useState<string>('');
  const [images, setImages] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // }
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      title: title,
      thumbnail: images,
      description: description,
      price: price,
      category: category
    };

    fetch(`http://localhost:8000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json()
      }).then(data => {
        alert("thêm thành công")
        console.log("data:", data);

      })
      .catch(error => {
        alert(error)
      });
  }
  return (
    // <form className="bg-white p-5 rounded-lg" onSubmit={onSubmit}>
    //   <div className="columns-4">
    //     <div className="mb-5">
    //       <label className="block mb-2 text-sm font-medium">Name</label>
    //       <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         onChange={(e: any) => { setTitle(e.target.value) }}
    //         type="text" id="title" placeholder="" />
    //     </div>
    //     <div className="mb-5">
    //       <label className="block mb-2 text-sm font-medium">Price</label>
    //       <input onChange={(e: any) => { setPrice(e.target.value) }} type="number"
    //         className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         id="price" placeholder="" />
    //     </div>
    //     <div className="form-group">
    //       <label className="block mb-2 text-sm font-medium">Cate</label>
    //       <select onChange={(e: any) => { setCategory(e.target.value) }} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         id="category">
    //         <option>Laptop</option>
    //         <option>Ipad</option>
    //         <option>Iphone</option>
    //         <option>Samsung</option>
    //         <option>Chuot khong day</option>
    //       </select>
    //     </div>
    //     <div className="mb-5">
    //       <label className="block mb-2 text-sm font-medium">Image</label>
    //       <input onChange={(e: any) => { setImages(e.target.value) }} type="text"
    //         className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         id="images" placeholder="image" />
    //     </div>
    //     <div className="mb-5">
    //       <label className="block mb-2 text-sm font-medium">MO TA</label>
    //       <textarea onChange={(e: any) => { setDescription(e.target.value) }} className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         id="description" ></textarea>
    //     </div>
    //   </div>
    //   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    //     Save
    //   </button>
    // </form>
<>
<form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 my-6" onSubmit={onSubmit}>
  <div className="grid sm:grid-cols-2 gap-10">
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Name</label>
      <input type="text" onChange={(e: any) => { setTitle(e.target.value) }}
        id="title" placeholder="Enter name product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Price</label>
      <input type="price"
      onChange={(e: any) => { setPrice(e.target.value) }}
       placeholder="Enter price product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
    <div className="relative flex items-center">
    <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Cate</label>
           <select onChange={(e: any) => { setCategory(e.target.value) }} className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
           id="category">
             <option>Laptop</option>
             <option>Ipad</option>
            <option>Iphone</option>
           <option>Samsung</option>
            <option>Chuot khong day</option>
          </select>
    </div>
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Image</label>
      <input 
      type="text"
      onChange={(e: any) => { setImages(e.target.value) }}
       placeholder="Enter image product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
    </div>
    
    <div className="relative flex items-center sm:col-span-2">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">MO TA</label>
      <input 
      type="text"
      onChange={(e: any) => { setDescription(e.target.value) }}
      placeholder="Enter description product " className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
  </div>
  <button className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]">Submit</button>
</form>

</>
  )
}

export default ProductAdd