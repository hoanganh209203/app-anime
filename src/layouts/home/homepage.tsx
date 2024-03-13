import React from 'react'
import ProductSlideshow from '../../components/slideshow'
import ListProduct from './listProduct'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <>
    <ProductSlideshow/>
    <ListProduct/>
    </>
  )
}
export default Homepage