import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/image/logo.png'
import { GiHamburgerMenu } from "react-icons/gi"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const hamburger = ()=>{setIsMenuOpen(!isMenuOpen)

  }
  return (
    <div>
      <div className=" bg-[#e23c3c]">
        <div className=" flex w-[95%] lg:w-[80%] mx-auto my-0 py-5 justify-between items-center sm:px-5 md:px-8">
          <div>
            <img src={logo} className="  w-[200px]"/>
          </div>
          <div className=" font-san justify-around text-white font-bold hidden w-[70%] text-xs lg:flex">
            <a href="/rent">FOR RENT</a>
            <a href="/sale">FOR SALE</a>        
            <a href="/company">COMPANIES </a>
            <a href="/">REQUESTS </a>
            <a href="/">MARKET TRENDS </a>        
            <a href="/register">REGISTER</a>        
            <a href="/">SIGN IN</a>
          </div>
          <button className=" border-2 text-white flex flex-col items-center p-3 lg:hidden" onClick={hamburger}>
            <h1 className=" sm:text-[15px]"><GiHamburgerMenu /></h1>
            <p className=" text-xs">MENU</p>

          </button>
        </div>
        {
          isMenuOpen && (
            <div className=" font-san font-bold w-[100%] bg-white flex flex-col py-2 px-3 lg:hidden">
            <a className=" hover:text-blue-600  border-b-2 py-2" href="/rent">FOR RENT</a>
            <a className=" hover:text-blue-600 border-b-2 py-2" href="/sale">FOR SALE</a>        
            <a className=" hover:text-blue-600 border-b-2 py-2" href="/company">COMPANIES </a>
            <a className=" hover:text-blue-600 border-b-2 py-2" href="/">REQUESTS </a>
            <a className=" hover:text-blue-600 border-b-2 py-2" href="/">MARKET TRENDS </a>        
            <a className=" hover:text-blue-600 border-b-2 py-2" href="/register">REGISTER</a>        
            <a className=" hover:text-blue-600 border-b-2 py-2" href="/">SIGN IN</a>
          </div>

          )
        }
      </div>
    </div>
  );
}
