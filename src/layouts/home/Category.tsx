import React, { useEffect, useState } from 'react'
import { CategoryType } from '../../interface/categorise';
import axios from 'axios';
import productType from '../../interface/product';
import { getAllCategory } from '../../services/category';
import { Link } from 'react-router-dom';

type Props = {}

const Category = (props: Props) => {
  const [products, setProducts] = useState<productType[]>([]);
  const [categoryId, setCategoryId] = useState(null);
  const [categories, setCategories] = useState<CategoryType[]>([])
  useEffect(() => {
    (async () => {
      const category: CategoryType[] = await getAllCategory();
      setCategories(category);
    })();
  }, [])

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`https://nodejs-fe.vercel.app/products/category/${categoryId}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (categoryId) {
      fetchProductsByCategory();
    }
  }, [categoryId]);

  const handleCategoryClick = (selectedCategoryId: any) => {
    setCategoryId(selectedCategoryId);
  };
  return (
    <>

<div className="font-[sans-serif] w-max mx-auto bg-white border-2 border-blue-500 rounded-lg overflow-hidden flex m-4">
      {categories.map((pro) => (
  <button onClick={() => handleCategoryClick(pro._id)} type="button" className="px-6 py-2.5 text-[#333] text-sm tracking-wider font-semibold border-r-2 border-blue-500 outline-none hover:bg-gray-100 active:bg-gray-200">{pro.name}</button>
))}
</div>

<div className="grid grid-cols-4 gap-8 mt-8 container">
        {products.map((item) => (
            <div className="flex flex-col gap-4" key={item._id}>
                <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <Link to={'details/' + item._id}>
                        <img src={item.thumbnail} className="h-7 w-6 object-cover object-center lg:h-full lg:w-full opacity-100 transition-opacity group-hover:opacity-70" />
                    </Link>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <Link to={'details/' + item._id}><h4 className="text-lg font-semibold truncate text-container w-48 overflow-hidden whitespace-nowrap">{item.title}</h4></Link>
                        <p>${item.price}</p>
                    </div>
                    <p>{item.category?.name}</p>
                </div>
                <button className="w-full py-2 rounded border border-black">
                    Add to cart
                </button>
            </div>
        ))}
    </div>

    
    </>





  )
}

export default Category