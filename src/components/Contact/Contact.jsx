import React from 'react';
import style from './Contact.module.css';
import mainImage from '../../../public/about.jpg'
import { Link } from 'react-router-dom';

export default function Contact() {
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


        <div className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-5xl gap-6 ">

          <div className="right">
            <p className={`text-white ${style.title} font-bold `}>Get In Touch With Us</p>
            <span className='text-[#aaaaaa] font-medium '>Contact us via below form ...</span>


            <div className='mt-6'>
              <p className='text-white text-sm my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
              <p className='text-white my-2'><i className="mr-1 fa-regular fa-envelope text-white p-2 rounded-[50%] hover:scale-110 bg-[#945d34]"></i> infof910@gmail.com</p>
              <p className='text-white my-2'><i className="mr-1 fa-solid fa-phone text-white p-2 rounded-[50%] hover:scale-110 bg-[#945d34]"></i> +20 01152130363</p>
            </div>


            <div className="flex flex-row items-center justify-center gap-3  my-3  ">

              <div className={`facebook rounded-md relative ${style.icon} overflow-hidden`}>
                <i className={` fa-brands text-center fa-facebook-f text-xl p-2 bg-[#ffffff07] rounded-md w-10 h-10 flex justify-center items-center  text-[#945d34]`}></i>
                <i className={`text-white absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-facebook-f text-xl p-2 bg-[#073e85] rounded-md w-10 h-10 flex justify-center items-center ${style.facebook}`}></i>

              </div>

              <div className={`twitter rounded-md relative ${style.twitterHolder} overflow-hidden`}>
                <i className="fa-brands text-center fa-twitter text-xl p-2 bg-[#ffffff07] rounded-md w-10 h-10 flex justify-center items-center  text-[#945d34]"></i>
                <i className={`text-white absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-twitter text-xl p-2 rounded-md w-10 h-10 flex justify-center items-center bg-[#1DA1F2] ${style.twitter}`}></i>
              </div>
              <div className={`insta rounded-md relative ${style.instagramHolder} overflow-hidden`}>
                <i className={` fa-brands text-center fa-instagram text-xl p-2 bg-[#ffffff07] rounded-md w-10 h-10 flex justify-center items-center  text-[#945d34]`}></i>
                <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-instagram text-xl p-2  text-white rounded-md w-10 h-10 flex justify-center items-center ${style.insta}`}></i>

              </div>

              <div className={`insta rounded-md relative ${style.pinterestHolder} overflow-hidden`}>
                <i className={` fa-brands text-center  fa-pinterest-p text-xl p-2 bg-[#ffffff07] rounded-md w-10 h-10 flex justify-center items-center  text-[#945d34]`}></i>
                <i className={`absolute top-0 bottom-0 inset-x-0 bg-[#E60023] text-center fa-brands fa-pinterest-p text-xl p-2  text-white rounded-md w-10 h-10 flex justify-center items-center ${style.pinterest}`}></i>

              </div>

            </div>

          </div>

          <div className="left w-full">
            <form >
              <div className="flex justify-between gap-2 flex-wrap w-full">
                <div>
                  <label htmlFor="name" className='font-medium text-sm text-[#aaaaaa] '>Name</label>
                  <input type="text" id='name' name='name' className='border-none outline-none rounded-md w-full my-2 p-2' />
                </div>
                <div>
                  <label htmlFor="email" className='font-medium text-sm text-[#aaaaaa] '>Email</label>
                  <input type="email" id='email' name='email' className='border-none outline-none rounded-md w-full my-2 p-2' />
                </div>

              </div>
              <div>
                <label htmlFor="phone" className='font-medium text-sm text-[#aaaaaa] '>phone</label>
                <input type="text" id='phone' name='phone' className='border-none outline-none rounded-md w-full my-2 p-2' />
              </div>
              <div>
                <label htmlFor="phone" className='font-medium text-sm text-[#aaaaaa] '>Department</label>
                <select type="number" id='phone' name='phone' className='border-none outline-none rounded-md w-full my-2 p-2' >
                  <option value="1" className='text-sm'>Buisness department</option>
                  <option value="2">Personal department</option>
                  <option value="3">Support department</option>
                  <option value="3">Others</option>

                </select>
              </div>
              <div>
                <label htmlFor="question" className='font-medium text-sm text-[#aaaaaa]'>Your question</label>
                <textarea name="question" id="question" className='w-full my-2 p-2 border-none outline-none rounded-md'></textarea>
              </div>


              <button className='px-4 py-2 text-white bg-[#945d34] hover:text-[#945d34] hover:bg-white transition duration-300 rounded-md my-2' type='submit'>Submit</button>
            </form>

          </div>


        </div>


        <div className='w-full relative' >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.5401755890618!2d31.217474698394774!3d30.06323120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458417fc7a93a7b%3A0x4f3142c67e7a5957!2sCozy%20Dessert%20Bar%20-%20Zamalek%20Branch!5e0!3m2!1sen!2seg!4v1726965678492!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="overlay absolute top-0 bottom-0 inset-x-0 bg-[#00000072]">

          </div>
        </div>
      </div>


    </>
  )
}
