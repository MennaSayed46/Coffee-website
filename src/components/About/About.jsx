import React, { useEffect, useState } from 'react';
import style from './About.module.css';
import AboutImg from '../../../public/about.jpg'
import { Link } from 'react-router-dom';
import cupImg from '../../../public/thirdIMG.png'
import secondImgGallery from '../../../public/secondImgGallery.jpg'
import secondImage from '../../../public/cf3.jpg'
import coffee from '../../../public/par2.jpg'
import { useInView } from 'react-intersection-observer';
import chef1 from '../../../public/ch1.jpg'
import chef2 from '../../../public/ch2.jpg'
import chef3 from '../../../public/ch3.jpg'
import chef4 from '../../../public/ch4.jpg'

export default function About() {
  const [years, setYears] = useState(0);
  const [awards, setAwards] = useState(0);
  const [clients, setClients] = useState(0);
  const [products, setProducts] = useState(0);



  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      const duration = 1500;
      let yearsCount = 0;
      let awardsCount = 0;
      let clientsCount = 0;
      let productsCount = 0;

      const yearsInterval = setInterval(() => {
        setYears(yearsCount);
        yearsCount++;
        if (yearsCount > 21) clearInterval(yearsInterval);
      }, duration / 21);

      const awardsInterval = setInterval(() => {
        setAwards(awardsCount);
        awardsCount++;
        if (awardsCount > 43) clearInterval(awardsInterval);
      }, duration / 43);

      const clientsInterval = setInterval(() => {
        setClients(clientsCount);
        clientsCount += 100;
        if (clientsCount > 27000) clearInterval(clientsInterval);
      }, duration / (27000 / 100));

      const productsInterval = setInterval(() => {
        setProducts(productsCount);
        productsCount++;
        if (productsCount > 99) clearInterval(productsInterval);
      }, duration / 99);


    }
  }, [inView]);

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='main bg-[#161719] Pb-12 overflow-hidden'>

        <div className={ `mainImage relative mb-12 ${style.mainImage}` }>
          <img src={AboutImg} alt="aboutMainImage" className='brightness-[50%]' />
          <div className='flex bg-[#000000a9] items-center absolute bottom-4 left-1/4 gap-2 p-2 rounded-xl text-white'>
            <Link to={`/home`}><i className="fa-solid fa-house hover:text-[#945d34] duration-300"></i></Link>
            <p><i className="fa-solid fa-angles-right"></i> About</p>

          </div>
        </div>



        <div className='text-center flex justify-center items-center py-12 flex-col mx-auto max-w-2xl px-4'>
          <img src={cupImg} alt="cup-image" className='' />
          <p className={`text-white ${style.about} font-bold my-6`}>
            About Our Coffee House
          </p>
          <p className={`text-[#aaaaaa] ${style.desc}`}>
            Simply put, our mission is to help people grow their happiness. This is why millions of executives in growing companies rely on XtraTheme.com to acquire the knowledge, products and services they need to run and grow their businesses and careers. It's also where thousands of advertisers reach and engage these valuable buyers, generating well over <span className='border-b border-dashed border-[#aaaaaa] '>$1.6</span> billion in incremental annual revenue.
          </p>
        </div>




        <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-3xl px-4 gap-12 py-12">
          <div className="item relative">
            <img
              src={secondImgGallery}
              alt="two-cups-image-about-section"
              className='relative rounded-xl z-10 w-full h-auto md:w-[400px] md:h-[400px]'
            />
            <div className={`${style.dots} absolute top-0 left-0 w-full h-full`} />
          </div>
          <div className="item relative mt-8 md:mt-0">
            <img
              src={secondImage}
              alt="two-cups-image-about-section"
              className='relative rounded-xl z-10 w-full h-auto md:w-[400px] md:h-[400px]'
            />
            <div className={`${style.dotsSecondImage} absolute top-0 left-0 w-full h-full`} />
          </div>
        </div>





        <div className='mt-8 py-8' style={{ backgroundImage: `url(${coffee})` }}>
          <div className="flex justify-center items-center mx-auto max-w-2xl flex-col ">
            <p className={`text-white ${style.professional} pt-12 text-center`}>We Are Professional At Our Skills</p>
            <p className={`${style.desc} py-6 text-[#aaaaaa] text-sm `}>We're here to help you to finding a best way</p>

          </div>




          <div className={`flex md:flex-row flex-col justify-around items-center mx-auto max-w-5xl py-12`} ref={ref}>
            <div className="item">
              <p className={`${style.number} text-white font-extralight`}>{years}+</p>
              <p className={`${style.typeOfCounter} text-sm text-[#eaeaea] text-center`}>Years of Experience</p>
            </div>
            <div className="item">
              <p className={`${style.number} text-white font-extralight`}>{awards}</p>
              <p className={`${style.typeOfCounter} text-sm text-[#eaeaea] text-center`}>Awards Wins</p>
            </div>
            <div className="item">
              <p className={`${style.number} text-white font-extralight`}>{(clients / 1000).toFixed(1)}K</p>
              <p className={`${style.typeOfCounter} text-sm text-[#eaeaea] text-center`}>Happy Clients</p>
            </div>
            <div className="item">
              <p className={`${style.number} text-white font-extralight`}>{products}</p>
              <p className={`${style.typeOfCounter} text-sm text-[#eaeaea] text-center`}>Perfect Products</p>
            </div>
          </div>
        </div>




        {/* expert chefs */}

        <div className="main flex chefs md:flex-row flex-col justify-center items-center mx-auto max-w-5xl gap-4 my-6">

          <div className={`${style.item} item1`}>
            <div className="img relative">
              <img src={chef1} alt="firstChef" className='rounded-md' />
              <div className={`hidden icons gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500 text-white ${style.icons}`}>

                <div className={`facebook rounded-md relative ${style.icon} overflow-hidden`}>
                  <i className={` fa-brands text-center fa-facebook-f text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center `}></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-facebook-f text-xl p-2 bg-[#073e85] rounded-md w-10 h-10 flex justify-center items-center ${style.facebook}`}></i>

                </div>

                <div className={`twitter rounded-md relative ${style.twitterHolder} overflow-hidden`}>
                  <i className="fa-brands text-center fa-twitter text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center"></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-twitter text-xl p-2 rounded-md w-10 h-10 flex justify-center items-center bg-[#1DA1F2] ${style.twitter}`}></i>
                </div>
              </div>

            </div>
            <div className="details my-3 text-center">
              <p className={` text-white ${style.name}`}>Jimmy Roland</p>
              <p className={`text-[#aaaaaa] ${style.job}`}>Founder</p>
            </div>
          </div>

          <div className={`${style.item} item2`}>
            <div className="img relative">
              <img src={chef2} alt="secondChef" className='rounded-md' />
              <div className={`hidden icons gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500 text-white ${style.icons}`}>

                <div className={`facebook rounded-md relative ${style.youtubeHolder} overflow-hidden`}>
                  <i className={` fa-brands text-center fa-youtube text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center `}></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-youtube text-xl p-2  bg-red-600 rounded-md w-10 h-10 flex justify-center items-center ${style.youtube}`}></i>

                </div>

                <div className={`twitter rounded-md relative ${style.twitterHolder} overflow-hidden`}>
                  <i className="fa-brands text-center fa-twitter text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center"></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-twitter text-xl p-2 rounded-md w-10 h-10 flex justify-center items-center bg-[#1DA1F2] ${style.twitter}`}></i>
                </div>
              </div>

            </div>
            <div className="details my-3 text-center">
              <p className={` text-white ${style.name}`}>Nicolas Xavier</p>
              <p className={`text-[#aaaaaa] ${style.job}`}>Chef</p>
            </div>
          </div>

          <div className={`${style.item} item3`}>
            <div className="img relative">
              <img src={chef3} alt="third" className='rounded-md' />
              <div className={`hidden icons gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500 text-white ${style.icons}`}>

                <div className={`facebook rounded-md relative ${style.instagramHolder} overflow-hidden`}>
                  <i className={` fa-brands text-center fa-instagram text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center `}></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-instagram text-xl p-2  bg-red-600 rounded-md w-10 h-10 flex justify-center items-center ${style.insta}`}></i>

                </div>

                <div className={`twitter rounded-md relative ${style.twitterHolder} overflow-hidden`}>
                  <i className="fa-brands text-center fa-twitter text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center"></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-twitter text-xl p-2 rounded-md w-10 h-10 flex justify-center items-center bg-[#1DA1F2] ${style.twitter}`}></i>
                </div>
              </div>

            </div>
            <div className="details my-3 text-center">
              <p className={` text-white ${style.name}`}>Alex Hernandez</p>
              <p className={`text-[#aaaaaa] ${style.job}`}>Chef</p>
            </div>
          </div>

          <div className={`${style.item} item4`}>
            <div className="img relative">
              <img src={chef4} alt="fourthImage" className='rounded-md' />
              <div className={`hidden icons gap-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500 text-white ${style.icons}`}>

                <div className={`facebook rounded-md relative ${style.instagramHolder} overflow-hidden`}>
                  <i className={` fa-brands text-center fa-instagram text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center `}></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-instagram text-xl p-2  bg-red-600 rounded-md w-10 h-10 flex justify-center items-center ${style.insta}`}></i>

                </div>

                <div className={`twitter rounded-md relative ${style.linkdinHolder} overflow-hidden`}>
                  <i className="fa-brands text-center fa-linkedin-in text-xl p-2 bg-[#ffffff19] rounded-md w-10 h-10 flex justify-center items-center"></i>
                  <i className={`absolute top-0 bottom-0 inset-x-0 fa-brands text-center fa-linkedin-in text-xl p-2 rounded-md w-10 h-10 flex justify-center bg-[#0077B5] items-center ${style.linkdin}`}></i>
                </div>
              </div>

            </div>
            <div className="details my-3 text-center">
              <p className={` text-white ${style.name}`}>Robert Gary</p>
              <p className={`text-[#aaaaaa] ${style.job}`}>Support</p>
            </div>
          </div>




        </div>






      </div>

    </>
  )
}
