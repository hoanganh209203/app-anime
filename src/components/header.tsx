
import React, { useContext } from 'react';
import { menu } from '../interface/product';
import { TbLogin } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { CountCT } from '../layouts/layout';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { CiUser } from "react-icons/ci";
type Props = {
  // title: string
  menu: menu[]
}

const Header = (Props: Props) => {
  const [state, setState] = useContext(CountCT) as any
  return (
    <>
      <div className="border-b-2 border-black ">
        <div className="flex justify-between p-3 ml-9 mr-9">
          <div className="flex gap-2">
            <p>Phone Number: 956 742 455 678 | </p>
            <p> Email:info@ddsgnr.com</p>
          </div>
          <div className="flex gap-9">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />

            <div className="flex justify-between items-center gap-2">
            <MdLanguage />
              <p>English</p>
            </div>
            <div className="flex justify-between items-center gap-2">
            <CiUser />
              <>
                <button type="button" onClick={() => { setState({ type: 'login' }) }}>Login</button>
                <button type="button" onClick={() => { setState({ type: 'register' }) }}>Register</button>
                <button type="button" onClick={() => { setState({ type: 'reset' }) }}>Reset</button>
              </>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex justify-between p-4 ml-9 mr-9">
        <div className="flex justify-between items-center mr-96">
          <img src="Frame 1.png" alt="" />
          <h1>Ddsgnr</h1>
        </div>
        <ul className="flex justify-between items-center gap-9 mr-6">
          <li><Link className="border-b-2 border-black p-2" to="/">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="">Services</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>
        <div className="gap-6">
          <input className="border-2 border-black rounded-sm h-10 w-36 p-2 mr-4" type="search" placeholder="Search" />
        </div>
        <div className="gap-9">
          <img className="w-3 h-5" src="heart.256x225.png" alt="" />
          Wishlist
        </div>
        <div className="gap-9">
          <img className="w-3 h-5" src="shopping-cart.251x256.png" alt="" />
          Cart
        </div>
        <div className="gap-9">
          <img className="w-3 h-5" src="bell.219x256.png" alt="" />
          Notification
        </div>
      </nav>

    </>
  )
}

export default Header;

{/* <nav className="bg-white border-gray-200 dark:bg-yellow-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={'/detail'}></NavLink>
        </li>
        <li>
          <NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={'/products'}>Product</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={'/demo'}>Demo</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={''}>Contact</NavLink>
        </li>
      </ul>
      <button type="button" onClick={()=>{setState({type:'login'})}}>Login</button>
        <button type="button" onClick={()=>{setState({type:'register'})}}>Register</button>
        <button type="button" onClick={()=>{setState({type:'reset'})}}>Reset</button>
    </div>
  </div>
</nav> */}