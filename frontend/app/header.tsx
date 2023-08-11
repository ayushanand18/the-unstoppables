import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './searchbar.tsx';
import logo from '../public/assets/images/logo.png';
import Link from 'next/link.js';
import Image from 'next/image';

interface User {
  name: string;
}

const Header: React.FC = () => {

  return (
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">
      <div className="w-full sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">
        <div className="flex items-center flex-1">
          <Link className="h-7 mr-1 sm:mr-4" href="/">
            <Image className="h-full w-full object-contain" src={logo} alt="Flipkart Logo" />
          </Link>
          <Searchbar />
        </div>
        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
            <Link href="/login" className="px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer">Login</Link>
          <span className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer">
            More
          </span>
          <Link href="/cart" className="flex items-center text-white font-medium gap-2 relative">
            <span><ShoppingCartIcon /></span>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
