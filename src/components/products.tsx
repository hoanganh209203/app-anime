import React from "react";
import { time } from "console";
import { title } from "process";
import productType from "../interface/product";
import AddToCart from "./addtocart";


type Props = {
    products: productType[]
}
const formatNumber = (number: { toString: () => string; }) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Products = (Props: Props) => {
    return (

        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Mới cập nhật
                </button>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {/* ----------------------------------------------------------------------------------------- */}
                    {Props.products.map(item => (
                        <div className="group relative">
                            <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={item.image} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full
                                  opacity-100 transition-opacity group-hover:opacity-70" />
                                <div className="absolute top-0 left-0 mt-2 ml-2">
                                    {[...Array(5)].map((_, index) => (
                                        <svg key={index} className={`w-4 h-4 fill-current text-yellow-500 ${index < item.rating ? 'opacity-100' : 'opacity-25'}`} viewBox="0 0 20 20">
                                            <path d="M10 0l2.44 6.51L20 7.39l-5.51 4.5L17.06 20 10 16.24 2.94 20 5.51 11.89 0 7.39l7.56-.88z" />
                                        </svg>
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9L5 21V3z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center">
                                <div className="text-center">
                                    <h3 className="text-sm text-white">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {item.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Lượt xem:{formatNumber(item.view)}</p>
                                </div>
                                {/* <p className="text-sm font-medium text-white">{item.view}</p> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}
export default Products