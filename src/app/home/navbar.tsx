import Link from 'next/link';
import React from 'react';
import {UserButton} from "@clerk/nextjs";
const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-purple-100 rounded-md">
      <div className="font-bold text-xl mr-10">My Navbar</div>
    
      <ul className="flex space-x-10 ">
        <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
        <li><Link href="/about" legacyBehavior><a>About</a></Link></li>
        <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
      </ul>
    <UserButton/>
    </nav>
  );
}

export default Navbar;