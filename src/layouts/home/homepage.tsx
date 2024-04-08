import React from 'react'
import ProductSlideshow from '../../components/slideshow'
import ListProduct from './listProduct'
import Banner from '../../components/Banner'



const Homepage = () => {
  return (
    <>
    <ProductSlideshow/>
    <ListProduct/>
    <Banner/>
    <ListProduct/>
    </>
  )
}
export default Homepage