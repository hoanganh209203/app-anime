
import { useContext, useState } from 'react';
import productType, { menu } from '../interface/product';
import { Link} from 'react-router-dom';
import { CountCT } from '../layouts/layout';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
type Props = {
  // title: string
  menu: menu[]
}

const Header = (Props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<productType[]>([]);

  const handleSearchChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://nodejs-fe.vercel.app/products?title=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };
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
            <Link to={'admin'}><CiUser /></Link>
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
        <div className="flex justify-between mr-94">
          <img className='max-w h-10' src="Frame 1.png" alt="" />
          <h1 className='text-xl font-bold'>Ddsgnr</h1>
        </div>
        <div className='flex gap-2'>

        <ul className="flex justify-between  gap-9 mr-6">
          <li><Link className="border-b-2 border-black p-2" to="/">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>
        <div className="flex justify-center  gap-3">
        {/* <div className="gap-6">
          <input className="border-2 border-black rounded-sm h-10 w-36 p-2 mr-4" type="search" placeholder="Search" />
        </div> */}

        <div className="gap-6">          
      <input
      className="border-2 border-black rounded-xl h-10 w-36 p-2 mr-4" type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        
      />
      <button className='' onClick={handleSearch}><IoSearchOutline /></button>
      <ul className='overflow-auto h-36'>
        {searchResults.map((product) => (
          <Link
          to={`details/${product._id}`}
          key={product._id}
        >
         

          <div className="flex items-center gap-3 hover:bg-gray-400">
            <img className="h-10 w-10" src={product.thumbnail} />
            <div>
              <h2 className='truncate text-container w-24 overflow-hidden whitespace-nowrap'>{product.title}</h2>
              <p>$ {product.price}</p>
            </div>
          </div>

        
        </Link>
        ))}
      </ul>
       
    </div>




        <div className="flex flex-col items-center">
        <CiHeart />
          Wishlist
        </div>
        <div className="flex flex-col items-center">
        <CiShoppingCart />
          Cart
        </div>
        <div className="flex flex-col items-center">
        <CiBellOn />
          Notification
        </div>
        </div>
        </div>
      </nav>

    </>
  )
}

export default Header;

