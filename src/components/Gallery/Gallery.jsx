import React from 'react';
import style from './Gallery.module.css';
import firstImg from '../../../public/coffee1.jpg';
import secondImg from '../../../public/coffee2.jpg';
import thirdImg from '../../../public/coffee3.jpg';
import fourthImg from '../../../public/coffee4.jpg';
import imgCup from '../../../public/coffee-cup.png'
import img from '../../../public/par1.jpg'
import dottedimg from '../../../public/co2.jpg'
import dot from '../../../public/dot.png'
import img1 from '../../../public/firstIMG.png'
import img2 from '../../../public/secondIMG.png'
import img3 from '../../../public/thirdIMG.png'
import img4 from '../../../public/fouthIMG..png'
import img5 from '../../../public/fifthIMG..png'
import img6 from '../../../public/sixthIMG.png'




export default function Gallery() {
  return (
    <>
      <section id='gallery'>

        <div className={`holder mx-auto bg-[#161719] flex md:flex-row flex-col justify-center items-center gap-5 overflow-hidden py-6 ${style.holder} md:mt-[-8%] mt-0`}>


          <div className={`firstItem relative ${style.firstItem} `}>
            <img src={firstImg} className={`imgItem ${style.imgItem} rounded-lg`} alt="" />
            <div className={`details absolute top-[40%] left-[20%] text-white flex flex-col justify-center items-center  ${style.details}`}>
              <p className={`my-0 py-0 firstLine ${style.firstLine}`}>Turkish Coffee</p>
              <span className={`${style.secondLine} text-[#aaaaaa]`}>Made of copper or brass</span>
              <span className='my-4 bg-[#945d34] w-[100px] h-[4px] rounded-sm '></span>

              <div className={`relative ${style.footer} overflow-hidden  rounded-md`}>
                <button className={`bg-white text-[#875f41] px-10 py-2 rounded-md text-center ${style.btn}`}>More details <i class="fa-solid fa-angles-right"></i> </button>
                <button className={`bg-[#945d34] absolute inset-x-0 top-0  bottom-0 text-center rounded-md text-white  ${style.anotherBtn}`}>lets’s check it <i class="fa-solid fa-angles-right"></i></button>
              </div>


            </div>
          </div>

          <div className={`secondItem relative ${style.firstItem}`}>
            <img src={secondImg} alt="" className={`imgItem ${style.imgItem} rounded-lg`} />
            <div className={`details absolute top-[40%] left-[20%] text-white flex flex-col justify-center items-center  ${style.details}`}>
              <p className={`my-0 py-0 firstLine ${style.firstLine}`}>Kaffee Fertig</p>
              <span className={`${style.secondLine} text-[#aaaaaa]`}>Swiss prune schnapps</span>
              <span className='my-4 bg-[#945d34] w-[100px] h-[4px] rounded-sm '></span>

              <div className={`relative ${style.footer} overflow-hidden  rounded-md `}>
                <button className={`bg-white text-[#875f41] px-10 py-2 rounded-md text-center ${style.btn}`}>More details <i class="fa-solid fa-angles-right"></i> </button>
                <button className={`bg-[#945d34] absolute inset-x-0 top-0  bottom-0 text-center rounded-md text-white  ${style.anotherBtn}`}>lets’s check it <i class="fa-solid fa-angles-right"></i></button>
              </div>


            </div>
          </div>

          <div className={`thirdItem relative ${style.firstItem}`}>
            <img src={thirdImg} alt="" className={`imgItem ${style.imgItem} rounded-lg`} />
            <div className={`details absolute top-[40%] left-[20%] text-white flex flex-col justify-center items-center  ${style.details}`}>
              <p className={`my-0 py-0 firstLine ${style.firstLine}`}>Jamaican Coffee</p>
              <span className={`${style.secondLine} text-[#aaaaaa]`}>Tia Maria & Rum</span>
              <span className='my-4 bg-[#945d34] w-[100px] h-[4px] rounded-sm '></span>

              <div className={`relative ${style.footer} overflow-hidden  rounded-md `}>
                <button className={`bg-white text-[#875f41] px-10 py-2 rounded-md text-center ${style.btn}`}>More details <i class="fa-solid fa-angles-right"></i> </button>
                <button className={`bg-[#945d34] absolute inset-x-0 top-0  bottom-0 text-center rounded-md text-white  ${style.anotherBtn}`}>lets’s check it <i class="fa-solid fa-angles-right"></i></button>
              </div>


            </div>

          </div>

          <div className={`fourthItem relative ${style.firstItem}`}>
            <img src={fourthImg} alt="" className={`imgItem ${style.imgItem} rounded-lg`} />
            <div className={`details absolute top-[40%] left-[20%] text-white flex flex-col justify-center items-center  ${style.details}`}>
              <p className={`my-0 py-0 firstLine ${style.firstLine}`}>Cafe Mendoza</p>
              <span className={`${style.secondLine} text-[#aaaaaa]`}>Kahlúa and Tequila</span>
              <span className='my-4 bg-[#945d34] w-[100px] h-[4px] rounded-sm '></span>

              <div className={`relative ${style.footer} overflow-hidden  rounded-md `}>
                <button className={`bg-white text-[#875f41] px-10 py-2 rounded-md text-center ${style.btn}`}>More details <i class="fa-solid fa-angles-right"></i> </button>
                <button className={`bg-[#945d34] absolute inset-x-0 top-0  bottom-0 text-center rounded-md text-white  ${style.anotherBtn}`}>lets’s check it <i class="fa-solid fa-angles-right"></i></button>
              </div>


            </div>

          </div>

        </div>

      </section>


      <section id='party-invited' className={`flex flex-col items-center justify-center py-12 bg-[#161719]  `}>
        <img src={imgCup} alt="img-cup" />
        <p className={`text-center text-[#945d34] ${style.invitedLine} my-4`}>It’s a party and you’re invited</p>

        <div className={`texts text-white flex flex-col justify-center items-center my-4 text-center`}>
          <p className={`${style.join}`}>
            Join Xtra <span className={`${style.coffeeHouse} border-b border-dashed border-white`}>Coffee House™</span> to earn Gold level benefits like free drinks and food,
          </p>
          <span className={`${style.join}`}>
            get free refills, pay and order with your phone, and more.
          </span>
        </div>

        <p className={`${style.lastLine} text-center text-[#808080]`}>Exclusive deals on drinks, delivered straight to your inbox, <span className={`text-white hover:text-[#945d34] cursor-pointer  ${style.joinNow}`}>Join Now</span>.</p>


      </section>




      <section id='offer'>
        <div style={{ backgroundImage: `url(${img})` }} className={`w-full overflow-hidden  `} >
          <div className="texts  py-[50px] px-8 flex flex-col  " >
            <p className={`${style.offerFirstLine} text-white gap-1 `}>What Do We Offer For You?</p>
            <p className={`text-[#aaaaaa] ${style.offerSecondLine} py-0 my-0 `}>Great coffee is important. But if you want loyal customers, creating a homely environment is crucial.</p>
            <span className='my-4 bg-[#945d34] w-[80px] h-[4px] rounded-sm  '></span>
          </div>


          <div className={`holder px-8 flex md:flex-row flex-col justify-around items-center `}>

            <div className="img py-8 relative ">
              <img src={dottedimg} alt="dotted-img" className='rounded-md w-[400px] h-[475px] relative z-10' />
              <div className={`${style.dots} absolute top-0 left-0 w-full h-full`} />
            </div>


            <div className="conatiner flex justify-center items-center gap-5">
              <div className="right flex flex-col justify-center items-center gap-5 ">

                <div className="item flex justify-center items-center gap-2">
                  <img src={img1} alt="img1" />
                  <div className="details">
                    <p className={`${style.titleDetails} text-white`}>High Quality Coffee</p>
                    <p className={`${style.secondLineOfferSection} text-[#aaaaaa]`}>Pick Up The Best Product</p>
                  </div>
                </div>

                <div className="item flex justify-center items-center gap-2">
                  <img src={img3} alt="img3" />
                  <div className="details">
                    <p className={`${style.titleDetails} text-white`}>
                      100% Pure Ceylon</p>
                    <p className={`${style.secondLineOfferSection} text-[#aaaaaa]`}>The Single Origin Tea</p>
                  </div>
                </div>


                <div className="item flex justify-center items-center gap-2">
                  <img src={img5} alt="img5" />
                  <div className="details">
                    <p className={`${style.titleDetails} text-white`}>Cake Services</p>
                    <p className={`${style.secondLineOfferSection} text-[#aaaaaa]`}>Celebrations And Parties</p>
                  </div>
                </div>







              </div>
              <div className="left flex flex-col justify-center items-center gap-5">
                <div className="item flex justify-center items-center gap-2">
                  <img src={img2} alt="img2" />
                  <div className="details">
                    <p className={`${style.titleDetails} text-white`}>Modern Coffee Makers</p>
                    <p className={`${style.secondLineOfferSection} text-[#aaaaaa]`}>Comfortable And Faster</p>
                  </div>
                </div>

                <div className="item flex justify-center items-center gap-2">
                  <img src={img4} alt="img4" />
                  <div className="details">
                    <p className={`${style.titleDetails} text-white`}>Grade 1 Coffee Beans</p>
                    <p className={`${style.secondLineOfferSection} text-[#aaaaaa]`}>No Primary Defects, 0-3 Full Defects</p>
                  </div>
                </div>

                <div className="item flex justify-center items-center gap-2">
                  <img src={img6} alt="img6" />
                  <div className="details">
                    <p className={`${style.titleDetails} text-white`}>Coffee Chocolate </p>
                    <p className={`${style.secondLineOfferSection} text-[#aaaaaa]`}>Perfectly Balanced Dark Chocolate</p>
                  </div>
                </div>


              </div>


            </div>







          </div>


        </div>

      </section>








    </>
  )
}
