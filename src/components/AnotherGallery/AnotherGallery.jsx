import React from 'react';
import style from './AnotherGallery.module.css';
import img1 from '../../../public/logo1_fff-1.jpg'
import img2 from '../../../public/logo3_fff-1.jpg'
import img3 from '../../../public/logof_fff-1.jpg'
import img4 from '../../../public/logo5_ffff-1.jpg'
import img5 from '../../../public/logo2_fff-1.jpg'
import img6 from '../../../public/logo3_fff-1.jpg'
import breakImg from '../../../public/break.png'
import manImgGallery from '../../../public/manGallery.jpg'
import thirdImgGallery from '../../../public/thirdImgGallery.jpg'
import secondImgGallery from '../../../public/secondImgGallery.jpg'


export default function AnotherGallery() {
  return (
    <>
      <section id='another-gallery ' className='w-full '>
        <div className="main flex md:flex-row flex-col items-center bg-[#161719] w-full md:gap-4 gap-0 mx-auto justify-between pb-12 ">

          {/* card1 */}

          <div className={`item1  flex flex-col items-center justify-center  ${style.card}`}>
            <p className={`text-center bg-[#945d34] text-white w-fit p-2 rounded-xl ${style.titleCard}`}> Coffee Cafe</p>
            <img src={img1} alt="image-logo1" className='w-full rounded-md my-2' />

          </div>



          {/* card2 */}
          <div className={`item1  flex flex-col items-center justify-center  ${style.card}`}>
            <p className={`text-center bg-[#945d34] text-white w-fit p-2 rounded-xl ${style.titleCard}`}>Coffee Co</p>
            <img src={img2} alt="image-logo2" className='w-full rounded-md my-2' />

          </div>


          {/* card3 */}
          <div className={`item1  flex flex-col items-center justify-center  ${style.card}`}>
            <p className={`text-center bg-[#945d34] text-white w-fit p-2 rounded-xl ${style.titleCard}`}>I love coffe</p>
            <img src={img3} alt="image-logo3" className='w-full rounded-md my-2' />

          </div>


          {/* card4 */}
          <div className={`item1  flex flex-col items-center justify-center  ${style.card}`}>
            <p className={`text-center bg-[#945d34] text-white w-fit p-2 rounded-xl ${style.titleCard}`}>The coffee shop</p>
            <img src={img4} alt="image-logo4" className='w-full rounded-md my-2' />

          </div>

          {/* card5 */}
          <div className={`item1  flex flex-col items-center justify-center  ${style.card}`}>
            <p className={`text-center bg-[#945d34] text-white w-fit p-2 rounded-xl ${style.titleCard}`}>Coffee House</p>
            <img src={img5} alt="image-logo5" className='w-full rounded-md my-2' />

          </div>

          {/* card6 */}
          <div className={`item1  flex flex-col items-center justify-center  ${style.card}`}>
            <p className={`text-center bg-[#945d34] text-white w-fit p-2 rounded-xl ${style.titleCard}`}>Coffee Premuim</p>
            <img src={img6} alt="image-logo6" className='w-full rounded-md my-2' />

          </div>




        </div>

      </section>



      <section id='break-blog' className={`break-clog `}>
        <div className="main flex flex-col  justify-center items-center bg-[#161719] py-12">
          <img src={breakImg} alt="break-img-section" className='my-6' />
          <p className={`text-white ${style.blog} font-bold`}>From The Blog</p>
          <p className={`text-[#808080] ${style.news} font-light`}>Latest news and updates</p>

          <div className="gallery my-12 flex flex-col md:flex-row justify-center items-center gap-2">


            <div className={`item1 flex flex-col ${style.item} bg-[#2f241e] rounded-xl`}>
              <div className="img relative">
                <img src={manImgGallery} alt="man-img-gallery-first-card" className='rounded-xl' />

                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${style.icone}`}>
                  <i className='fa fa-coffee cz_grid_icon text-white text-7xl'></i>
                </div>

              </div>
              <div className="details px-4 py-6 bg-[#2f241e] ">
                <p className={`${style.titleOfGallery} text-white font-bold my-2`}>a place of silence</p>

                <span className='text-[#dbdbdb] '><i className="cz_sub_icon mr8 fa fa fa-folder-open"></i> Coffee shop,tutorial</span>

              </div>
            </div>

            <div className={`item2 flex flex-col ${style.item} bg-[#2f241e] rounded-xl`}>
              <div className="img relative">
                <img src={secondImgGallery} alt="secondImgGallery-second-card" className='rounded-xl' />

                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${style.icone}`}>
                  <i className='fa fa-coffee cz_grid_icon text-white text-7xl'></i>
                </div>

              </div>
              <div className="details px-4 py-6 bg-[#2f241e] ">
                <p className={`${style.titleOfGallery} text-white font-bold my-2`}>How to create a logo like a pro</p>

                <span className='text-[#dbdbdb] '><i className="cz_sub_icon mr8 fa fa fa-folder-open"></i> Coffee, Tea</span>

              </div>
            </div>

            <div className={`item3 flex flex-col ${style.item} bg-[#2f241e] rounded-xl`}>
              <div className="img relative">
                <img src={thirdImgGallery} alt="thirdImgGallery-third-card" className='rounded-xl' />

                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${style.icone}`}>
                  <i className='fa fa-coffee cz_grid_icon text-white text-7xl'></i>
                </div>

              </div>
              <div className="details px-4 py-6 bg-[#2f241e] ">
                <p className={`${style.titleOfGallery} text-white font-bold my-2`}>Principles of coldness</p>

                <span className='text-[#dbdbdb] '><i className="cz_sub_icon mr8 fa fa fa-folder-open"></i> Uncategorized</span>

              </div>
            </div>





          
          </div>


        </div>

      </section>





    </>
  )
}
