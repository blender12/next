import React from 'react';
import Link from 'next/link';
import { BsFillPersonFill,BsHouse } from "react-icons/bs";
import {IoMailOutline,IoPodiumOutline } from "react-icons/io5";

function navbar(){
    return(
        <div className="col-md-1 m-0 p-0">
       <nav className="navBar text-center">
       <a className="navbar-brand" href="#">W</a>
           <ul className="nav flex-column">
           <li className="nav-item mt-2  text-center">
   <Link href="/" passHref={true}><a className="navBar-link mt-2"><BsHouse/></a></Link>
  </li>
  <li className="nav-item mt-2  text-center">
    <Link href="/about" passHref={true}><a className="navBar-link active"><BsFillPersonFill/></a></Link>
  </li>
  <li className="nav-item mt-2  text-center">
 <Link href="/skills" passHref={true}><a className="navBar-link mt-2"><IoPodiumOutline/></a></Link>
  </li>
  <li className="nav-item mt-2  text-center">
   <Link href="/contact" passHref={true}><a className="navBar-link mt-2"><IoMailOutline/></a></Link>
  </li>
</ul>
        </nav>
       </div>
    )
}

export default navbar;