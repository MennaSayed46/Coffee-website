
import React, { useEffect, useState } from 'react';
import style from './Shop.module.css';
import Loading from '../Loading/Loading';

export default function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={style.shopContainer}>
      <div className="flex flex-wrap justify-center items-center mx-auto ">
        {data.map((product, index) => (
          <div key={index} className='w-1/4 p-2 rounded-md  '>
            <div className=' bg-[#000000] text-white rounded-md '>
              <img src={product.image} alt={product.name} className={`brightness-[40%] rounded-md`} />
              <h3 className={`p-2`}>{product.title}</h3>
              <p className={`p-2 line-clamp-3`}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



  );
}

