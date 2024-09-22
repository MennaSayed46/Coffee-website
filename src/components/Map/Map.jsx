
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from './Map.module.css';
import mapImg from '../../../public/map.png';
import cl1 from '../../../public/cl1.jpg';
import cl2 from '../../../public/cl2.jpg';
import cl3 from '../../../public/cl3.jpg';

export default function Map() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  const [hoveredCard, setHoveredCard] = useState(null);


  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <section className='bg-[#161719] mx-auto py-8'>
        <div className={`map mx-auto px-12 flex md:flex-row flex-col md:justify-between justify-center items-center`}>
          <div className="left w-[100%] ">
            <div className="main flex flex-col ">
              <p className={`${style.title} text-white font-bold`}>Sale And Delivery Points</p>
              <p className={`text-[#aaaaaa] ${style.details}`}>Where to buy our high quality coffee</p>
              <span className='mb-6 bg-[#945d34] w-[80px] h-[4px] rounded-sm'></span>
              <p className={`${style.desc} text-white`}>
                For corporate offices, colleges, hospitals, casinos, and restaurants of all types, coffee is an important part of every day. Xtra is an experienced provider of wholesale services both great and small.

                First and foremost I am a chef, whether behind the stove at one of my Northern California restaurants or for the past 15 years in front of the camera on my <span className={`${style.coffeeHouse} border-b border-dashed border-white`}>Food Network</span> cooking shows. Creating new dishes and flavor combinations that bring cooks and our restaurant guests pleasure is my job and I love it.

                Creating new dishes and flavor combinations that bring cooks and our restaurant guests pleasure is my job and I love it.
              </p>

              <div className={`relative ${style.footer} overflow-hidden rounded-md w-fit my-6`}>
                <button className={`text-white bg-[#875f41] px-10 py-2 rounded-md text-center ${style.btn}`}>
                  Get started <i className="fa-solid fa-angles-right"></i>
                </button>
                <button className={`text-[#945d34] absolute top-0 bottom-0 inset-x-0 text-center rounded-md bg-white ${style.anotherBtn}`}>
                  More details<i className="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="right w-[100%] ">
            <div className="main flex flex-col justify-around items-center ">


              <div className="item flex justify-between items-center bg-[#2f241e] w-[100%] p-3 cursor-pointer"
                onClick={() => handleItemClick(1)}>
                <div className='flex justify-center items-center text-center gap-x-1'>
                  <i className="text-white cz-acc-i cz-acc-icon fas fa-cart-plus"></i>
                  <p className={`text-white text-center my-0 py-0`}>Where buy our coffee?</p>
                </div>
                <i className={`text-white cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
              </div>

              <AnimatePresence>
                {activeItem === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-[#2b241e] w-full overflow-hidden '
                  >
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <hr />


              <div className="item flex justify-between items-center bg-[#2f241e] w-[100%] p-3 cursor-pointer"
                onClick={() => handleItemClick(2)}>
                <div className='flex justify-center items-center text-center gap-x-1'>
                  <i className="text-white cz-acc-i cz-acc-icon fas fa-id-badge"></i>
                  <p className={`text-white text-center my-0 py-0`}>Become our dealer</p>
                </div>
                <i className={`text-white cz_acc_close_icon fa ${activeItem === 2 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
              </div>

              <AnimatePresence>
                {activeItem === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-[#2b241e] w-full overflow-hidden'
                  >
                    <img src={mapImg} alt="Map" className="w-full h-auto mt-4" />
                  </motion.div>
                )}
              </AnimatePresence>

              <hr />


              <div className="item flex justify-between items-center bg-[#2f241e] w-[100%] p-3 cursor-pointer"
                onClick={() => handleItemClick(3)}>
                <div className='flex justify-center items-center text-center gap-x-1'>
                  <i className="text-white cz-acc-i cz-acc-icon fab fa-cc-mastercard"></i>
                  <p className={`text-white text-center my-0 py-0`}>Get your discount</p>
                </div>
                <i className={`text-white cz_acc_close_icon fa ${activeItem === 3 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
              </div>

              <AnimatePresence>
                {activeItem === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-[#2b241e] w-full overflow-hidden'
                  >
                    <img src={mapImg} alt="Map" className="w-full h-auto mt-4" />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>


      <section className='bg-[#161719]'>
        <div className="main flex md:flex-row flex-col md:mx-0 gap-4 md:gap-0 mx-4 justify-center items-center bg-[#161719] ">

          <div
            className={`${style.card}   overflow-hidden`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex flex-col items-center relative card1 overflow-hidden`}>
              <motion.img
                src={cl1}
                alt="cl1"
                className='brightness-[50%] transition-all duration-300'
                animate={hoveredCard === 1 ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 }}
                transition={{ duration: 0.01 }}
              />
              <p className={`absolute bottom-12 text-center font-medium text-white my-4 ${style.cl}`}>
                We’re better than the rest
              </p>
            </div>

            <div className='relative'>
              <AnimatePresence>
                {hoveredCard === 1 && (
                  <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 inset-x-0 p-4 bg-black ${style.description}`}
                  >
                    <p className='text-white text-center text-xl'>Curabitur aliquet quam id dui posuere blandit</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>


          <div
            className={`${style.card}   overflow-hidden`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex flex-col items-center relative card1 overflow-hidden`}>
              <motion.img
                src={cl2}
                alt="cl2"
                className='brightness-[50%] transition-all duration-300'
                animate={hoveredCard === 2 ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 }}
                transition={{ duration: 0.01 }}
              />
              <p className={`absolute bottom-12 text-center font-medium text-white my-4 ${style.cl}`}>
                Compete on value, not price.
              </p>
            </div>

            <div className='relative'>
              <AnimatePresence>
                {hoveredCard === 2 && (
                  <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 inset-x-0 p-4 bg-black ${style.description}`}
                  >
                    <p className='text-white text-center text-xl'>Curabitur aliquet quam id dui posuere blandit</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>


          <div
            className={`${style.card}  overflow-hidden`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`flex flex-col items-center relative card1 overflow-hidden`}>
              <motion.img
                src={cl3}
                alt="cl3"
                className='brightness-[50%] transition-all duration-300'
                animate={hoveredCard === 3 ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 }}
                transition={{ duration: 0.01 }}
              />
              <p className={`absolute bottom-12 text-center font-medium text-white my-4 ${style.cl}`}>
                Quality is the first case for us.
              </p>
            </div>

            <div className='relative'>
              <AnimatePresence>
                {hoveredCard === 3 && (
                  <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 inset-x-0 p-4 bg-black ${style.description}`}
                  >
                    <p className='text-white text-center text-xl text-xl'>Curabitur aliquet quam id dui posuere blandit</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
