import React from 'react';
import logo from './logo.svg';

import Header from './components/header';
import Products from './components/products';
import Footer from './components/footer';
import productType, { menu } from './interface/product';
import Slideshow from './components/slideshow';

function App() {
  const menu: menu[] = [{
    path: "/", title: "Trang Chủ"
  },
  {
    path: "/", title: "Thể Loại"
  },
  {
    path: "/", title: "Thư Viện"
  },
  {
    path: "/", title: "Top Anime"
  },
  {
    path: "/", title: "SEASON"
  },
  {
    path: "/", title: "Lịch Chiếu"
  },

  ];
  const products: productType[] = [
    {
      "id": "1",
      "name": "One Piece - Đảo Hải Tặc (1999)",
      "image": "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe",
      "view": 133398833,
      "rating":5
    },
    {
      "id": "2",
      "name": "Solo Leveling - Tôi Thăng Cấp Một Mình",
      "image": "https://image-repository-cdn.tappytoon.com/series/20/fcaf7325-b78f-430b-9545-bd63f485a1a0.jpg?size=large",
      "view": 10198422,
      "rating":5
    },
    {
      "id": "3",
      "name": "Thám Tử Lừng Danh Conan",
      "image": "https://vov2.vov.vn/sites/default/files/styles/large/public/2022-07/image001.jpg",
      "view":42352390,
      "rating":5
    },
    {
      "id": "4",
      "name": "Mashle 2nd Season",
      "image": "https://external-preview.redd.it/mashle-magic-and-muscles-season-2-key-visual-v0-50FPrD9vU9pPnf03NRGUU7cTBh2vV2oQM0pY0iyd4fM.jpg?auto=webp&s=576314bc6c306b9a09dd20d1048a54a9022c48d3",
      "view": 10990433,
      "rating":4
    },
    {
      "id":" 5",
      "name": "Black Clover (TV)",
      "image": "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe",
      "view": 61718320,
      "rating":5
    },
  ]

  return (
    <div className=" bg-black">
      <Header menu={menu} title="Logo" logo='https://animehay.city/themes/img/logo.png' />
      <Slideshow />
      <Products products={products}/>
      <Footer />
    </div>
  );
}

export default App;
