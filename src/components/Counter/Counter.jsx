
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './Counter.module.css';
import img from '../../../public/coffee-cup-1.png';
import cc2 from '../../../public/cc2.jpg';
import img1 from '../../../public/firstIMG.png'

export default function Counter() {
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

      let yearsCount = 0;
      let yearsInterval = setInterval(() => {
        setYears(yearsCount);
        yearsCount++;
        if (yearsCount > 53) clearInterval(yearsInterval);
      }, 20);


      let awardsCount = 0;
      let awardsInterval = setInterval(() => {
        setAwards(awardsCount);
        awardsCount++;
        if (awardsCount > 102) clearInterval(awardsInterval);
      }, 15);


      let clientsCount = 0;
      let clientsInterval = setInterval(() => {
        setClients(clientsCount);
        clientsCount += 100;
        if (clientsCount > 36000) clearInterval(clientsInterval);
      }, 1);

      let productsCount = 0;
      let productsInterval = setInterval(() => {
        setProducts(productsCount);
        productsCount++;
        if (productsCount > 99) clearInterval(productsInterval);
      }, 10);
    }
  }, [inView]);

  return (
    <>
      <section className={`bg-[#161719] py-12`} ref={ref}>
        <div className="main">
          <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="Coffee Cup" />
            <p className={`text-white ${style.title} font-bold text-center`}>We Are Professional at Our Skills</p>
            <span className={`text-[#808080] font-light ${style.minor}`}>More than 2000+ customers trusted </span>
          </div>

          <div className={`flex md:flex-row flex-col justify-around items-center`}>
            <div className="item">
              <p className={`${style.number} text-[#945d34] font-extralight`}>{years}+</p>
              <p className={`${style.desc} text-[#eaeaea] text-center`}>Years of Experience</p>
            </div>
            <div className="item">
              <p className={`${style.number} text-[#945d34] font-extralight`}>{awards}</p>
              <p className={`${style.desc} text-[#eaeaea] text-center`}>Awards Wins</p>
            </div>
            <div className="item">
              <p className={`${style.number} text-[#945d34] font-extralight`}>{(clients / 1000).toFixed(1)}K</p>
              <p className={`${style.desc} text-[#eaeaea] text-center`}>Happy Clients</p>
            </div>
            <div className="item">
              <p className={`${style.number} text-[#945d34] font-extralight`}>{products}</p>
              <p className={`${style.desc} text-[#eaeaea] text-center`}>Perfect Products</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-[#161719] py-12`}>
        <div className="main flex justify-center  ">
          <div className='flex md:flex-row flex-col justify-center items-center w-4/5 '>
            <img src={cc2} alt="" className='rounded-md ' />
            <div className="left flex flex-col bg-[#231e1b] rounded-md   w-[100%] h-[100%] items-center">
              <div className='flex justify-center items-center py-12 flex-col'>

                <p className={`text-white ${style.limitedTime} font-bold`}>Limited Time Offer</p>
                <p className={`${style.minor} text-[#808080] font-light`}>Buy Now Special Coffee And Tea</p>
                <img src={img1} alt="" className='my-8' />
                <p className={`${style.minor} text-[#aaaaaa] text-center my-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,

                  sed do eiusmod tempor incididunt ut labore et dolore</p>




                <div className={`relative ${style.footer} overflow-hidden  rounded-md`}>
                  <button className={`text-xl font-medium text-white bg-[#875f41] px-10 py-2 rounded-md text-center ${style.btn}`}><i class="fa-solid fa-cart-shopping mr-1"></i> Get Now </button>
                  <button className={`text-xl font-medium text-[#945d34] absolute inset-x-0 top-0  bottom-0 text-center rounded-md bg-white  ${style.anotherBtn}`}><i class="fa-solid fa-cart-shopping mr-1"></i> Good choice</button>
                </div>



              </div>


            </div>
          </div>


        </div>


      </section>



    </>




  );
}
