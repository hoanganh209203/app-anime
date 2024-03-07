import React from 'react'

type Props = {
    pid:string;
}

const AddToCart = (props: Props) => {
    const handleAddToCart =()=>{
        alert(props.pid);
    }
  return (
    <button type="button" className='bg-red-500 hover:bg-red-700 text-white ml-6 font-bold py-2 px-4 rounded w-[200px]' onClick={handleAddToCart}>Movie</button>
  )
}

export default AddToCart