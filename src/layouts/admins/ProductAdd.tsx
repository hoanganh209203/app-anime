import { useEffect, useState } from 'react'
import productType from '../../interface/product';
import { ProductJoiObj } from '../../validations/products';
import { addProduct, getAllProduct } from '../../services/products';

const ProductAdd = () => {
  const [title, setTitle] = useState<string>('');
  const [thumbnail, setThumnail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [message,setMessage]=useState<string>('')
  const [Products,setProduct]=useState<productType[]>([])
  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     title: title,
  //     thumbnail: images,
  //     description: description,
  //     price: price,
  //     category: category
  //   };
  
    const handleSubmit = async (e:any)=>{
      try {
      e.preventDefault()
      const {error} = ProductJoiObj.validate({title,thumbnail,price})
      // 
      if (error){
          setMessage(error.message)
      }
      else {
          const product = await addProduct({title,price,description,thumbnail})
          const newproducts = [...Products,product]
              setProduct(newproducts)
              setTitle('')
              setThumnail('')
              setPrice(0)
              setDescription('')
              setCategory('')
      }
  } catch (error) {
         console.log(error);            
  }
  }
  return (
<>
{message}
<form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 my-6" onSubmit={handleSubmit}>
  <div className="grid sm:grid-cols-2 gap-10">
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Name</label>
      <input type="text" onChange={(e: any) => { setTitle(e.target.value) }}
        value={title} placeholder="Enter name product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
    <div className="relative flex items-center">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Price</label>
      <input type="price"
      value={price}
      onChange={(e: any) => { setPrice(e.target.value) }}
       placeholder="Enter price product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
      
    </div>
    <div className="relative flex items-center">
    <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">Cate</label>
           <select onChange={(e: any) => { setCategory(e.target.value) }} className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
           value={category}>
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
      value={thumbnail}
      onChange={(e: any) => { setThumnail(e.target.value) }}
       placeholder="Enter image product" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
    </div>
    
    <div className="relative flex items-center sm:col-span-2">
      <label className="text-[13px] absolute top-[-10px] left-0 font-semibold">MO TA</label>
      <input 
      type="text"
      value={description}
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