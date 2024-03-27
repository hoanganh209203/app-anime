import React from 'react'

type Props = {}

const UpdateProduct = (props: Props) => {
  return (
    <>
    <form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 my-6" >
  <div className="grid sm:grid-cols-2 gap-10">
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Name</label>
      <input type="text" 
        id="title" placeholder="Enter name product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Price</label>
      <input type="price"
      
       placeholder="Enter price product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
    <div className="relative flex items-center">
    <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Cate</label>
           <select className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
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
       placeholder="Enter image product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
    </div>
    
    <div className="relative flex items-center sm:col-span-2">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">MO TA</label>
      <input 
      type="text"
     autoComplete="new-password" placeholder="Enter description product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
  </div>
  <button className="mt-10 px-2 py-2.5 w-full rounded text-sm font-semibold bg-[#333] text-white hover:bg-[#222]">Submit</button>
</form>
    </>
  )
}

export default UpdateProduct