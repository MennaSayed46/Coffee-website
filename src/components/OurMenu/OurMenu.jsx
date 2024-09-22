import React from 'react';
import style from './OurMenu.module.css';
import mainImage from '../../../public/about.jpg'
import { Link } from 'react-router-dom';
import cupImg from '../../../public/thirdIMG.png'
import coffee from '../../../public/par2.jpg'
import cakeImage from '../../../public/fifthIMG..png'

export default function OurMenu() {
  return (
    <>
      <div className="main bg-[#161719] Pb-12 ">

        <div className={`mainImage relative mb-12 ${style.mainImage}`}>
          <img src={mainImage} alt="Our-menu-MainImage" className='brightness-[50%]' />
          <div className='flex bg-[#000000a9] items-center absolute bottom-4 left-1/4 gap-2 p-2 rounded-xl text-white'>
            <Link to={`/home`}><i className="fa-solid fa-house hover:text-[#945d34] duration-300"></i></Link>
            <p className='text-sm'><i className="fa-solid fa-angles-right"></i> Our menu</p>

          </div>
        </div>



        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto py-12 ">
          <img src={cupImg} alt="caup-image" />
          <p className={`text-white font-bold ${style.title} py-6`}>Our Coffee Menu</p>


          <div className="flex md:flex-row flex-col items-center justify-between gap-12">

            <div className="card">
              <div className="item my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Cafe Latte</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>2.55$</p>
              </div>
              <div className="item2 my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Americano</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$3.65</p>
              </div>
              <div className="item3 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Espresso</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$4.29</p>
              </div>
              <div className="item4 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Mocha</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$2.99</p>
              </div>
              <div className="item5 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Ice Coffee</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$5.15</p>
              </div>

            </div>

            <div className="card">
              <div className="item my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Cafe Latte</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>2.55$</p>
              </div>
              <div className="item2 my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Americano</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$3.65</p>
              </div>
              <div className="item3 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Espresso</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$4.29</p>
              </div>
              <div className="item4 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Mocha</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$2.99</p>
              </div>
              <div className="item5 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Ice Coffee</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$5.15</p>
              </div>

            </div>





          </div>


        </div>





        <div className="relative cake-menu h-[50vh] object-cover" style={{ backgroundImage: `url(${coffee})`,backgroundAttachment:'fixed' }}>
          <div className="absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 flex justify-center items-center mx-auto max-w-2xl flex-col ">
            <img src={cakeImage} alt="" />
            <p className={`text-white font-bold ${style.title} py-6 text-center `}>Our Cake Menu</p>

          </div>


        </div>

        
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto py-12 ">
          <img src={cupImg} alt="caup-image" />
          <p className={`text-white font-bold ${style.title} py-6`}>Our Coffee Menu</p>


          <div className="flex md:flex-row flex-col items-center justify-between gap-12">

            <div className="card">
              <div className="item my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Cafe Latte</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>2.55$</p>
              </div>
              <div className="item2 my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Americano</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$3.65</p>
              </div>
              <div className="item3 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Espresso</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$4.29</p>
              </div>
              <div className="item4 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Mocha</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$2.99</p>
              </div>
              <div className="item5 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Ice Coffee</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$5.15</p>
              </div>

            </div>

            <div className="card">
              <div className="item my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Cafe Latte</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>2.55$</p>
              </div>
              <div className="item2 my-2 flex justify-between items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Americano</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$3.65</p>
              </div>
              <div className="item3 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Espresso</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$4.29</p>
              </div>
              <div className="item4 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Mocha</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$2.99</p>
              </div>
              <div className="item5 flex justify-between my-2 items-center gap-6">
                <div className='my-1'>
                  <p className='text-white'>Ice Coffee</p>
                  <p className={`desc text-[#aaaaaa] text-sm`}> Lorem ipsum dolor sit amet. </p>

                </div>

                <p className={`price text-white`}>$5.15</p>
              </div>

            </div>





          </div>


        </div>


      </div>

    </>
  )
}
