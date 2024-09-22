import React, { useState } from 'react';
import style from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/thirdIMG.png';
import img from '../../../public/par1.jpg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>


      <nav className='fixed  inset-x-0 top-0 z-30 md:px-2  px-5'>
        <div className=' flex justify-between md:justify-around items-center  '>

          <div className="logo flex justify-between gap-2 items-center  ">
            <img src={logo} alt="logo" className='w-[50px] h-[50px] rounded-[50%] object-cover ' />
            <div className={`title text-white font-semibold  ${style.title} flex flex-col justify-center items-center`}>
              <h1>Faraht’s</h1>
              <h1>Coffee</h1>
            </div>
          </div>


          {/* //on small screens */}

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white md:hidden'>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars bg-[#875f41] text-xl text-center p-2 font-medium rounded-md'}`}></i>
          </button>



          <ul
            className={` text-white flex flex-col md:flex-row gap-x-1 md:gap-3
               items-center fixed md:relative top-12 md:top-0 right-0 w-2/4 md:w-auto p-x-1 md:p-0 transition-all 
            ${isMenuOpen ? 'translate-x-0 duration-1000' : 'translate-x-[100%] duration-200'} md:translate-x-0
            bg-cover bg-center bg-no-repeat md:bg-none ${style.ul}`}

          >
        

            <NavLink
              to={'/home'}
              className={({ isActive }) =>
                `item ${style.item} hover:bg-[#875f41] md:p-4 sm:p-1 md:rounded-b-[40%] ${isActive ? 'bg-[#875f41]' : ''}`
              }
            >
              <div className="flex flex-col text-white">
                <span>Home</span>
                <span className='text-[#d6d6d6]'>Take a coffee</span>
              </div>
            </NavLink>


            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                `item ${style.item} hover:bg-[#875f41] md:p-4 sm:p-1 md:rounded-b-[40%] ${isActive ? 'bg-[#875f41]' : ''}`
              }
            >
              <div className="flex flex-col text-white">
                <span className={``}>About</span>
                <span className={`text-[#d6d6d6]`}>Who we are</span>
              </div>
            </NavLink>

            <NavLink
              to={'/menu'}
              className={({ isActive }) =>
                `item ${style.item} hover:bg-[#875f41] md:p-4 sm:p-1 md:rounded-b-[40%] ${isActive ? 'bg-[#875f41]' : ''}`
              }
            >
              <div className="flex flex-col text-white">
                <span className={``}>Our Menu</span>
                <span className={`text-[#d6d6d6]`}>Coffee &tea</span>
              </div>
            </NavLink>


          

            <NavLink
              to={'/shop'}
              className={({ isActive }) =>
                `item ${style.item} hover:bg-[#875f41] md:p-4 sm:p-1 md:rounded-b-[40%] ${isActive ? 'bg-[#875f41]' : ''}`
              }
            >
              <div className="flex flex-col text-white">
                <span className={``}>Shop</span>
                <span className={`text-[#d6d6d6]`}>Products</span>
              </div>
            </NavLink>

            <NavLink
              to={'/faq'}
              className={({ isActive }) =>
                `item ${style.item} hover:bg-[#875f41] md:p-4 sm:p-1 md:rounded-b-[40%] ${isActive ? 'bg-[#875f41]' : ''}`
              }
            >
              <div className="flex flex-col text-white">
                <span className={``}>FAQ</span>
                <span className={`text-[#d6d6d6]`}>questions</span>
              </div>
            </NavLink>

            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                `item ${style.item} hover:bg-[#875f41] md:p-4 sm:p-1 md:rounded-b-[40%] ${isActive ? 'bg-[#875f41]' : ''}`
              }
            >
              <div className="flex flex-col text-white">
                <span className={``}>Contact</span>
                <span className={`text-[#d6d6d6]`}>Write us</span>
              </div>
            </NavLink>



            <div className={`${style.item} icons flex justify-center items-center text-white md:gap-x-2 gap-2  `}>
              <div className={`bg-[#f0f8ff1a] icon hover:bg-[#875f41] p-3  flex justify-center ${style.icone} items-center   h-[80px] text-center transition-colors duration-300 ease `}>
                <i className={`fa-brands fa-facebook-f  `}></i>
              </div>
              <div className={`bg-[#f0f8ff1a] icon hover:bg-[#875f41] p-3  flex justify-center items-center h-[80px] text-center  ${style.icone}`}>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className={`bg-[#f0f8ff1a] icon hover:bg-[#875f41] p-3  flex justify-center items-center  h-[80px] text-center  ${style.icone}`}>

                <i className="fa-brands fa-instagram"></i>
              </div>

            </div>


          </ul>




        </div>
      </nav>
    </>
  )
}






