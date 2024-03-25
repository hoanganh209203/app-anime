import React, { useState } from 'react'

type Props = {}

const ProductAdd = (props: Props) => {
    const [name, setName] = useState<string>('');
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
        name: name,
        images: images,
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
      }).then(data =>{
        alert("thêm thành công")
        console.log("data:",data);
        
      })
      .catch(error => {
        alert(error)
      });
    }
    return (
      <form onSubmit={onSubmit}>
        <div className="">
          <label >Name</label>
          <input onChange={(e:any)=>{setName(e.target.value)}} type="text" className="form-control" id="name" placeholder="" />
        </div>
        <div className="">
          <label >Price</label>
          <input onChange={(e:any)=>{setPrice(e.target.value)}} type="number" className="form-control" id="price" placeholder="" />
        </div>
        <div className="form-group">
          <label >Cate</label>
          <select onChange={(e:any)=>{setCategory(e.target.value)}} className="form-control" id="category">
            <option>Laptop</option>
            <option>Ipad</option>
            <option>Iphone</option>
            <option>Samsung</option>
            <option>Chuot khong day</option>
          </select>
        </div>
        <div className="form-group">
          <label>Anhr</label>
          <input onChange={(e:any)=>{setImages(e.target.value)}} type="text" className="form-control" id="images" placeholder="image" />
        </div>
        <div className="form-group">
          <label>MO TA</label>
          <textarea  onChange={(e:any)=>{setDescription(e.target.value)}} className="form-control" id="description" ></textarea>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Save
        </button>
      </form>
  
  )
}

export default ProductAdd