
import React from 'react';
import { menu } from '../interface/product';
import { TbLogin } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

type Props = {
    // title: string
    menu: menu[]
}

const Header = (Props: Props) => {
    return (
        // <nav classNameName="bg-black">
        //     <div classNameName="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        //         <div classNameName="relative flex h-16 items-center justify-between">
        //             <div classNameName="absolute inset-y-0 left-0 flex items-center sm:hidden">

        //                 <button type="button" classNameName="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        //                     <span classNameName="absolute -inset-0.5"></span>
        //                     <span classNameName="sr-only">Open main menu</span>

        //                     <svg classNameName="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                     </svg>
        //                 </button>
        //             </div>
        //             <div classNameName="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        //                 <div classNameName="flex flex-shrink-0 items-center">
        //                     <img classNameName="h-8 w-auto" src="https://animehay.city/themes/img/logo.png" alt="Your Company" />
        //                 </div>
        //                 <div classNameName="hidden sm:ml-6 sm:block">
        //                     <div classNameName="flex space-x-4">
        //                         {Props.menu.map(item => (
        //                             <a href={item.slug} classNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{item.title}</a>
        //                         ))}


        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <form classNameName="max-w-md mx-auto">
        //                     <label htmlFor="default-search" classNameName="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        //                     <div classNameName="relative">
        //                         <div classNameName="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        //                             <svg classNameName="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        //                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        //                             </svg>
        //                         </div>
        //                         <input type="search" id="default-search" classNameName="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm truyện" required />
        //                     </div>
        //                 </form>
        //             </div>
        //             <div classNameName="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        //                 <button type="button" classNameName="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        //                     <span classNameName="absolute -inset-1.5"></span>
        //                     <span classNameName="sr-only">View notifications</span>
        //                     <svg classNameName="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        //                     </svg>
        //                 </button>

                    

        //             </div>
        //         </div>
        //     </div>

        // </nav>

        

<nav className="bg-white border-gray-200 dark:bg-gray-900">
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
          <NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={''}>Pricing</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={''}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}
export default Header;