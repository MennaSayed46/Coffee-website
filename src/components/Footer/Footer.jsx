import React from 'react';
import style from './Footer.module.css';
import imgFooter from '../../../public/footer.jpg'
import manGallery from '../../../public/manGallery.jpg'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>

      <section
        id='footer'
        style={{
          position: 'relative',
          backgroundImage: `url(${imgFooter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1,
          }}
        ></div>


        <div
          className="main py-8 flex md:flex-row flex-col justify-around items-center"
          style={{ position: 'relative', zIndex: 2 }}
        >


          <div className="item1">
            <p className={`text-center text-white ${style.title} font-bold my-2`}>Office Information</p>
            <hr className='border-[#aaaaaa]' />


            <div className=" my-4  ">

              {/* firstSentene */}
              <div className={`flex flex-row  items-center  items-center  my-3 ${style.firstSentence} ${style.sentence} cursor-pointer`}>
                <div className={`icone flex justify-center items-center ${style.icon}`}>
                  <i className="fa-solid fa-location-dot bg-white  text-[#945d34] p-2 rounded-[50%] mr-2"></i>
                </div>
                <p className={`text-white ${style.listItem} text-sm`}>Ta3meer street ,Giza , Egypt </p>

              </div>
              {/* secondSentence */}
              <div className={`cursor-pointer flex flex-row  items-center my-3 ${style.secondSentence} ${style.sentence}`}>
                <div className={`icone flex justify-center items-center ${style.icon}`}>
                  <i className="fa-solid fa-phone bg-white  text-[#945d34] p-2 rounded-[50%] mr-2"></i>
                </div>
                <p className={`text-white ${style.listItem} text-sm`}>+20 01119121377 </p>

              </div>
              {/* thirdSentence */}
              <div className={`cursor-pointer flex flex-row  items-center my-3 ${style.secondSentence} ${style.sentence}`}>
                <div className={`icone flex justify-center items-center ${style.icon}`}>
                  <i className="fa-solid fa-envelope bg-white  text-[#945d34] p-2 rounded-[50%] mr-2"></i>
                </div>
                <p className={`text-white ${style.listItem} text-sm`}>mennaabdelateef910@gmail.com </p>

              </div>
              {/* fourthSentence */}
              <Link to={`https://github.com/MennaSayed46`} target='_blank'>
                <div className={`cursor-pointer flex flex-row  items-center my-3 ${style.secondSentence} ${style.sentence}`}>
                  <div className={`icone flex justify-center items-center ${style.icon}`}>
                    <i className="fa-brands fa-github bg-white  text-[#945d34] p-2 rounded-[50%] mr-2"></i>
                  </div>
                  <p className={`text-white ${style.listItem} text-sm`}>Menna Sayed</p>

                </div>
              </Link>

            </div>
          </div>


          

          <div className="item2">
            <p className={`text-center text-white ${style.title} font-bold my-2`}>news</p>

            <hr className='border-[#aaaaaa]' />


            <div className=" my-4  ">

              {/* firstSentene */}

              <div className={`flex flex-row  my-3 ${style.firstSentence} ${style.sentence} cursor-pointer ${style.secondColFirstItem} `}>
                {/* img */}
                <div className='relative'>
                  <img src={manGallery} alt="man-gallery-footer" className='w-[80px] h-[80px] object-cover rounded-md mr-2' />
                  <div className={`icon ${style.icone} text-xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform`}>
                    <i className="fas fa-link"></i>

                  </div>
                </div>

                {/* texts */}

                <div className='details'>
                  <p className={`${style.title} text-white font-bold my-2`}>A place of sillence</p>
                  <p className='text-[#aaaaaa] text-sm'><i className="fa-solid fa-clock mr-1"></i> 21 september 2024</p>

                </div>

              </div>
              <hr className='border-[#aaaaaa]' />


              {/* secondSentence */}


              <div className={`flex flex-row  my-3 ${style.firstSentence} ${style.sentence} cursor-pointer ${style.secondColFirstItem} `}>
                {/* img */}
                <div className='relative'>
                  <img src={manGallery} alt="man-gallery-footer" className='w-[80px] h-[80px] object-cover rounded-md mr-2' />
                  <div className={`icon ${style.icone} text-xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform`}>
                    <i className="fas fa-link"></i>

                  </div>
                </div>

                {/* texts */}

                <div className='details'>
                  <p className={`${style.title} text-white font-bold my-2`}>A place of sillence</p>
                  <p className='text-[#aaaaaa] text-sm'><i className="fa-solid fa-clock mr-1"></i> 21 september 2024</p>

                </div>

              </div>



            </div>
          </div>



          <div className="item3">
            <p className={`text-center text-white ${style.title} font-bold my-2`}>Quick Shortcuts</p>
            <hr className='border-[#aaaaaa]' />


            <div className={`flex gap-4  justify-around  ${style.holder}`}>

              {/* firstSentene */}
              <div className={`flex flex-row  items-center  my-3 ${style.firstSentence} ${style.sentence} cursor-pointer`}>
                <ul >
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> Home</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> City Store</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> Toolkits</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> Employees</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> Teams</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> Benefits</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i> support</li>
                </ul>

              </div>
              {/* secondSentence */}
              <div className={`cursor-pointer flex flex-row  items-center my-3 ${style.secondSentence} ${style.sentence}`}>
                <ul>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i>Maps</li>
                  <li className='text-white my-1 text-sm'><i className="fa-solid fa-angle-right mr-1"></i>Careers</li>
                  <li className='text-white text-sm my-1'><i className="fa-solid fa-angle-right mr-1"></i> News</li>
                  <li className='text-white text-sm my-1'><i className="fa-solid fa-angle-right mr-1"></i> Clients</li>
                  <li className='text-white text-sm my-1'><i className="fa-solid fa-angle-right mr-1"></i> Consultation</li>
                  <li className='text-white text-sm my-1'><i className="fa-solid fa-angle-right mr-1"></i> Publicity</li>

                </ul>

              </div>


            </div>
          </div>

          <div className="item4">
            <p className={`text-center text-white ${style.title} font-bold my-2`}>Working Hours</p>
            <hr className='border-[#aaaaaa]' />


            <div className="flex flex-col justify-center items-center my-4">
              <div className="flex flex-col justify-center text-sm" >

                <p className='text-white line-clamp-3 flex flex-col flex-wrap'>Our support available</p>
                <p className='text-white line-clamp-3 flex flex-col flex-wrap'>to help you 24 hours a </p>
                <p className='text-white line-clamp-3 flex flex-col flex-wrap'> day, seven days a week.</p>
                <div className={`flex justify-around my-2 items-center text-white text-sm gap-x-4 ${style.clock} border-b border-dashed border-[#aaaaaa88]`}>
                  <p className='my-1'>Monday to Friday</p>
                  <p className='my-1'>8:00 - 16:30</p>

                </div>

                <div className={`flex justify-around my-2 items-center text-white text-sm gap-x-4 ${style.clock} border-b border-dashed border-[#aaaaaa88]`}>
                  <p className='my-1'>Saturday</p>
                  <p className='my-1'>8:00 - 13:00</p>

                </div>
              </div>



            </div>
          </div>



        </div>
      </section>

    </>
  )
}
