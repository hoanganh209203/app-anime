import React, { useState } from 'react';


const ProductSlideshow = () => {
    return (
        <div className="relative">
  <img src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/06/luffy-from-one-piece-goku-from-dragon-ball-z-and-saitama-from-one-punch-man.jpg" alt="Banner" className="w-full h-auto"/>
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Đắm chìm trong thế giới anime</h2>
    <p className="text-white text-lg md:text-xl lg:text-2xl mb-8">Hàng ngàn bộ anime mới và cũ đang chờ bạn khám phá.</p>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none">Xem phim</button>
  </div>
</div>
      );
    
}

export default ProductSlideshow;
