import React, { useState } from 'react';


const ProductSlideshow = () => {
    return (
      <>
      <div className="mx-auto container my-28 grid grid-cols-2 gap-20">
      <h1 className="text-[56px] leading-[66px]">
        Transform Your Home <br />
        with Our Stunning <br />
        <span className="font-bold">Furniture Collection</span>
      </h1>
      <div>
        <p className="text-lg text-justify">
          Welcome to our furniture store, where we believe that a well-furnished
          home is a happy home. We offer a wide selection of high-quality
          furniture for every room in your home, from cozy sofas and elegant
          dining sets to stylish office desks and comfortable beds.
        </p>
        <div className="flex items-center gap-4 mt-10">
          <button
            className="py-3 px-6 border border-black rounded bg-black text-white"
          >
            Shop Now
          </button>
          <button className="py-3 px-6 border border-black rounded">
            Learn More
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <img src="banner.png" alt="" />
      </div>
    </div>


    <div className="container mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-5xl font-bold">Featured Products</h2>
          <p className="text-lg my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <button className="py-3 px-6 border border-black rounded">
            View all
          </button>
        </div>
      </div>
      </div>
      </>
      );
    
}

export default ProductSlideshow;
