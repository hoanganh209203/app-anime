import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import productType from '../../interface/product';

type Props = {}
const formatNumber = (number: { toString: () => string; }) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const ProductPage = (props: Props) => {
    const [products, setProductData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/products`)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data);
            });
    }, []);



    //?skip=${(page-1)*9}&limit=9 
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <button className="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">
                    Mới cập nhật
                </button>
                <div className="grid grid-cols-4 gap-8 mt-8">
                    {products.map((item: productType) => (
                        <div className="flex flex-col gap-4">
                            <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                                <NavLink to={'details/' + item.id}>
                                    <img src={item.thumbnail} className="h-7 w-6 object-cover object-center lg:h-full lg:w-full opacity-100 transition-opacity group-hover:opacity-70" />
                                </NavLink>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <NavLink to={'details/' + item.id}>
                                        <h4 className="text-lg font-semibold">{item.title}
                                        </h4>
                                    </NavLink>
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
            </div>
        </div>

    )
}

export default ProductPage