import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import productType from '../../interface/product';
import { getAllProduct } from '../../services/products';

type Props = {}
const formatNumber = (number: { toString: () => string; }) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const ProductPage = (props: Props) => {

  
    const [products, setProducts] = useState<productType[]>([])

 
    useEffect(() => {
        (async()=>{
          const products:productType[] = await getAllProduct();
          setProducts(products);
       })();
    },[])
console.log(products);
    //?skip=${(page-1)*9}&limit=9 
    return (
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

    )
}

export default ProductPage