import React from 'react'
import ProductSlideshow from '../../components/slideshow'
import ListProduct from './listProduct'
import Banner from '../../components/Banner'



const Homepage = () => {
  return (
    <div className='container'>
    <ProductSlideshow/>
    <ListProduct/>
    <Banner/>
    <ListProduct/>
    </div>
  )
}
export default Homepage