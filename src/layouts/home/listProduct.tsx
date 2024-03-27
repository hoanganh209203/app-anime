import React, { useEffect, useState } from 'react'
import productType from '../../interface/product';
import { Link, NavLink } from 'react-router-dom';

const formatNumber = (number: { toString: () => string; }) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const ListProduct = () => {

    const [status, setStatus] = useState(true)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
 
    useEffect(() => {
        const url = `http://localhost:8000/products?_page=${page}&_limit=9`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          });
    }, [page]);

    //?skip=${(page-1)*9}&limit=9 
    return (
        <>
        <div className="grid grid-cols-4 gap-8 mt-8 container">
            {products.map((item: productType) => (
                <div className="flex flex-col gap-4" key={item.id}>
                    <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                        <NavLink to={'details/' + item.id}>
                            <img src={item.thumbnail} className="h-7 w-6 object-cover object-center lg:h-full lg:w-full opacity-100 transition-opacity group-hover:opacity-70" />
                        </NavLink>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <NavLink to={'details/' + item.id}><h4 className="text-lg font-semibold">{item.title}</h4></NavLink>
                            <p>{item.price}</p>
                        </div>
                        <p>{item.category}</p>
                    </div>
                    <button className="w-full py-2 rounded border border-black">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
            
            <button onClick={() => setPage(page - 1)} className='border mt-5'>Previous Page</button>
            <button onClick={() => setPage(page + 1)} className='border mt-5'>Next Page</button>


            </>

    )
};
export default ListProduct