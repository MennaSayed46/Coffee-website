import React, { useState } from 'react';
import style from './FAQ.module.css';
import mainImage from '../../../public/about.jpg'
import sideImage from '../../../public/cf2.jpg'
import dot from '../../../public/dot.png'
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


export default function FAQ() {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };
  return (
    <>

      <div className="main bg-[#161719] Pb-12 ">
        <div className={`mainImage relative mb-12 ${style.mainImage}`}>
          <img src={mainImage} alt="FAQ-MainImage" className='brightness-[50%]' />
          <div className='flex bg-[#000000a9] items-center absolute bottom-4 left-1/4 gap-2 p-2 rounded-xl text-white'>
            <Link to={`/home`}><i className="fa-solid fa-house hover:text-[#945d34] duration-300"></i></Link>
            <p className='text-sm'><i className="fa-solid fa-angles-right"></i> FAQ</p>

          </div>
        </div>


        <div className="flex md:flex-row flex-col justify-between items-center max-w-5xl mx-auto gap-12 py-6">
          <div className="right ">
            <div className="img relative w-[80%] mx-auto ">
              <img src={sideImage} alt="dotted-img" className='rounded-md  relative z-10' />
              <div className={`${style.dots} absolute top-0 left-0 inset-x-0 w-full h-full z-0 `} />

            </div>

            <div className="form mt-12 py-12 ">
              <p className={`text-white ${style.askUs}`}><i className="fa-regular fa-message bg-[#2f241e] p-2 rounded-xl text-center mr-2"></i>Ask Us </p>
              <form className='my-6' >
                <div className="flex flex-col name my-1">
                  <label htmlFor="name" className='text-white py-1'>Your name</label>
                  <input type="text" id='name' className='border-none outline-none rounded-md py-1' required />

                </div>
                <div className="flex flex-col email my-1 ">
                  <label htmlFor="email" className='text-white py-1'>Your email</label>
                  <input type="text" id='email' className='border-none outline-none rounded-md py-1' required />

                </div>
                <div className="flex flex-col email my-1 ">
                  <label htmlFor="question" className='text-white py-1'>Your question</label>
                  <textarea name="question" id="question" className='rounded-md border-none outline-none py-1' required></textarea>

                </div>

                <button type='submit' className='text-white bg-[#945d34] rounded-md hover:text-[#945d34] hover:bg-white transition duration-300 my-2 px-4 py-2'>Ask</button>
              </form>
            </div>



          </div>

          <div className="left md:w-full flex flex-col max-w-3xl ">

            <p className={`text-white ${style.questions} my-6`}>Do You Have Any Questions?</p>
            <span className='text-[#aaaaaa] text-sm font-medium my-1'>Please read questions bellow and if you can not find your answer,</span>
            <span className='text-[#aaaaaa] text-sm font-medium mt-1 mb-6'> please send us your question, we will answer you as soon as possible.</span>

            <p className={`text-white font-bold  ${style.FAQS} mb-4`}><i class="fa-solid fa-question text-white bg-[#2f241e] rounded-md p-3 "></i> F.Q.A.S</p>

            {/* {item1} */}
            <div className={activeItem === 1 ? 'w-full  flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full  flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(1)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Your Question Title?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* item2 */}
            <div className={activeItem === 2 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(2)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Do eiusmod tempor incidit?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 2 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* item3 */}
            <div className={activeItem === 3 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(3)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Cupidatat iusmod tempor incid idun?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 3 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>
            {/* item4 */}
            <div className={activeItem === 4 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(4)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Excepteur sint occaecat cupidatat iusmod tempor incid idun?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 4 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* item5 */}
            <div className={activeItem === 5 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(5)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Consectetur adipisicing elit, sed do eiusmod tempor incididunt?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 5 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* item6 */}
            <div className={activeItem === 6 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(6)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Lorem ipsum dolor sit amet, consectetur?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 6 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>


            {/* item7 */}
            <div className={activeItem === 7 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(7)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Duis aute irure dolor in reprehenderit in voluptate?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 7 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>
            {/* item8 */}
            <div className={activeItem === 8 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(8)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Excepteur sint occaecat cupidatat non proident, sunt in culpa?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 8 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* item9 */}
            <div className={activeItem === 9 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(9)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i> Ut enim ad minim veniam, quis nostrud exercitation ullamco?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 9 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* item10 */}
            <div className={activeItem === 10 ? 'w-full flex flex-row justify-between items-center rounded-md bg-white text-[#945d34] py-2 px-4 border border-[#aaaaaa]' : `text-white border border-[#aaaaaa]  py-2 px-4  w-full flex flex-row justify-between items-center rounded-md `} onClick={() => handleItemClick(10)}>
              <p className=''><i className="fa-regular fa-bookmark  mr-1"></i>Laboris nisi ut aliquip ex ea commodo consequat?</p>
              <i className={` cz_acc_close_icon fa ${activeItem === 1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>

            </div>
            <AnimatePresence>
              {activeItem === 10 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='bg-white w-full overflow-hidden rounded-md py-2 px-4'
                >

                  <p className={`${style.rightDetails} p-3`}>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                      </p>
                </motion.div>
              )}
            </AnimatePresence>



          </div>
        </div>







      </div>

    </>
  )
}
