
import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import Slider from 'react-slick';
import slide2 from '../../../public/cup-coffee-hand-women-wood-texture.jpg';
import slide1 from '../../../public/cup-coffee-latte-wood-table-coffee-shop-cafe.jpg';
import Gallery from '../Gallery/Gallery';
import Map from '../Map/Map';
import Counter from '../Counter/Counter';
import AnotherGallery from '../AnotherGallery/AnotherGallery';
import Loading from '../Loading/Loading';

export default function Home() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {

    window.addEventListener('scroll', () => {
      let wScroll = window.scrollY;
      console.log(wScroll);
      if (wScroll > 150) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }

    })
  }, []);
  const settings = {
    className: "",
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    duration: 250,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }


    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center  h-screen overflow-x-hidden'>
          <Loading />
        </div>
      ) : (
        <>
          <main className='relative'>

            <div className={`home w-full h-auto slider-container overflow-x-hidden bg-[#161719]  `}>
              <Slider {...settings}>
                <div className='relative'>
                  <img src={slide1} alt="slide1" className='w-full h-screen object-cover ' />
                  <div className={`texts absolute top-[40%] gap-y-3 left-[15%] flex flex-col justify-center text-[#875f41] ${style.texts}`}>
                    <p className={`bg-white rounded-xl my-2 ${style.firstLine}`}>The empty coffee cup is</p>
                    <p className={`bg-white rounded-xl ${style.secondLine}`}>full of hope</p>
                  </div>
                </div>

                <div className='relative'>
                  <img src={slide2} alt="slide2" className='w-full h-screen object-cover' />
                  <div className={`texts absolute top-[40%] gap-y-3 right-[15%] flex flex-col justify-center text-[#875f41] ${style.texts}`}>
                    <p className={`bg-white rounded-xl my-2 ${style.firstLine}`}>The best way to steam</p>
                    <p className={`bg-white rounded-xl ${style.secondLine}`}>milk coffee</p>
                  </div>
                </div>
              </Slider>

            </div>


            <Gallery />
            <Map />
            <Counter />
            <AnotherGallery />
            <div className="relative my-6">
              {showScrollBtn && (
                <div className='fixed bottom-5 right-5 rounded-md cursor-pointer z-[9999]'>
                  <i
                    className="fa-solid fa-arrow-up text-white text-2xl p-2 rounded-full bg-[#945d34]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  ></i>
                </div>
              )}

            </div>



          </main>
        </>
      )}
    </>
  );
}
