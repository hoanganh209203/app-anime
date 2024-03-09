import React, { useState } from 'react';


const ProductSlideshow = () => {
    return (
        <div className="relative">
<div className="grid grid-rows-1 grid-cols-5 gap-0">
  <div className=''>
  <div className="col-span-1">
    <img src="https://cdn.9pay.vn/tin-tuc/blobid1698726897012-1698726914.png" alt="Side Image 1" className="w-full h-[142px]"/>
  </div>
  <div className="col-span-1">
    <img src="https://assetsio.reedpopcdn.com/naruto-new-episodes.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp" alt="Side Image 2" className="w-full h-[142px]"/>
  </div>
  <div className="col-span-1">
    <img src="https://hnm.1cdn.vn/2024/03/08/db.jpg" alt="Side Image 2" className="w-full h-[142px]"/>
  </div>
  </div>
  <div className="col-span-3">
    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe" alt="Main Image" className="w-full"/>
  </div>
 <div>
 <div className="col-span-1">
    <img src="https://photo-cms-baophapluat.epicdn.me/w840/Uploaded/2024/gznrxgmabianhgzmath/2022_05_30/doraemon-9528.jpg" alt="Side Image 3" className="w-full h-[142px]"/>
  </div>
  <div className="col-span-1">
    <img src="https://gamek.mediacdn.vn/133514250583805952/2020/5/16/https-2f2fs3-ap-southeast-2amazonawscom2fvms-tv-images-prod2f20172f102f1013172fpokepokemon1920-158964792996424270108.jpg" alt="Side Image 4" className="w-full h-[142px]"/>
  </div>
  <div className="col-span-1">
    <img src="https://cdn.popsww.com/blog/sites/2/2023/07/conan-movie-24.jpg" alt="Side Image 4" className="w-full h-[142px]"/>
  </div>
 </div>
</div>

  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Đắm chìm trong thế giới anime</h2>
    <p className="text-white text-lg md:text-xl lg:text-2xl mb-8">Hàng ngàn bộ anime mới và cũ đang chờ bạn khám phá.</p>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none">Xem phim</button>
  </div>
</div>
      );
    
}

export default ProductSlideshow;
