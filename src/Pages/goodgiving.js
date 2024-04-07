import React from 'react';
import water from '../Assets/Main/wtaergirl.jpg';
import reu from '../Assets/Main/reu.jpg';
import happy from '../Assets/Main/happy.jpg';
import waterbottle from '../Assets/Main/water-bottle.png';
import Bottomnavbar from './bottomnavbar';
import footer from '../Assets/Main/footer3.PNG';

function Goodgiving() {
  return (
      <div className='bg-black size-full'>
      <div className="w-full bg-black rounded-md shadow-lg mx-auto px-20">
    <div className="md:flex">
      {/* Left Side (Image) */}
      <div className="md:w-1/2">
        <img
          className="w-full h-64 object-cover md:h-full md:w-full"
          src={waterbottle}
          alt="Card"
        />
      </div>
      {/* Right Side (Title and Description) */}
      <div className="md:w-1/2 p-2 pt-7 px-20 pb-4">
          <h2 className="text-5xl text-[#21a4a5] mb-2 pt-20 pb-4 py-15 px-7 font-moto align-middle">
          THE ONLY WATER THAT GIVES BACK ONE HUNDRED PERCENT TO YOU, YOUR COMMUNITY, AND YOUR PLANET.
          </h2>
        </div>
    </div>
  </div>


  <div className="w-[65%] bg-[#21a4a5] overflow-hidden rounded-md shadow-lg mx-auto my-11 justify-center">
      <div className="flex">
        {/* Left Side (Title and Description) */}
        <div className="md:w-1/2 p-2 pt-2 px-20 pb-4">
          <h2 className="text-5xl font-semibold text-[#ffffff] mb-2 pt-2">
          Good For You
          </h2>
          <p className="text-2xl font-moto leading-normal text-[#ffffff] ">
          One half-litre bottle of Good Giving Water provides you with 10-13% of your daily requirement of Zinc.<br/>  <br/>   

Zinc is found in cells throughout the body. It helps the immune system fight off invading bacteria and viruses, and helps wounds heal. The body also needs Zinc to make proteins and DNA, the genetic material in all cells. Zinc is also important for the proper functioning of our senses of taste and smell.<br/><br/>

* In its 2020 report, the Indian Council for Medical Research (ICMR) upped the Recommended Dietary Allowance of Zinc to 13mg and 17mg per day for adult women and men, from the earlier RDA of 10mg and 12mg, respectively.
          </p>
        </div>
        {/* Right Side (Image) */}
        <div className="md:w-1/2">
          <img
            className="w-full h-64 object-cover md:h-full md:w-full"
            src={water}
            alt="Card"
          />
        </div>
      </div>
    </div>

    <div className="w-[65%] bg-[#21a4a5] overflow-hidden rounded-md shadow-lg mx-auto my-8">
    <div className="md:flex">
      {/* Left Side (Image) */}
      <div className="md:w-1/2">
        <img
          className="w-full h-64 object-cover md:h-full md:w-full"
          src={happy}
          alt="Card"
        />
      </div>
      {/* Right Side (Title and Description) */}
      <div className="md:w-1/2 p-2 pt-10 px-20 pb-1">
          <h2 className="text-5xl font-semibold text-[#ffffff] mb-2 pt-2 pb-4">
          Good For Your Community
          </h2>
          <p className="text-xl font-moto leading-normal text-[#ffffff] ">
          With every bottle of Good Giving Water you drink, you contribute to your community.<br/>  <br/>   

          We have committed all the profit from the sale of Good Giving Water towards installing water-filtration units in underprivileged households in the city.<br/><br/>
          </p>
        </div>
    </div>
  </div>

  <div className="w-[65%] bg-[#21a4a5] rounded-md shadow-lg mx-auto">
      <div className="flex">
        {/* Left Side (Title and Description) */}
        <div className="md:w-1/2 p-2 pt-20 ps-10 pe-10 pb-10">
          <h2 className="text-5xl font-semibold text-[#ffffff] mb-2 pt-2 pb-4">
          100% Recyclable
          </h2>
          <p className="text-xl font-moto leading-normal text-[#ffffff] ">
          The plastic used to make our bottles is 100% recyclable. We ensure that all our bottles are collected and recycled into useful, reusable items, such as T-shirts and other garments.<br/>  <br/>   

          Yes, most of the polyester content in garments comes from recycled PET fibre – which makes them durable, dry quickly after a wash, wick sweat away, and help insulate from the cold.<br/><br/>
          </p>
        </div>
        {/* Right Side (Image) */}
        <div className="md:w-1/2">
          <img
            className="w-full h-64 object-cover md:h-full md:w-full"
            src={reu}
            alt="Card"
          />
        </div>
      </div>
    

    </div>
    <div className='flex w-full justify-center items-center pl-20 px-20'>
        <img className='bg-black mx-10 h-94 w-[1500px] p-20'src={footer} alt="logo"></img>
    </div>
    <Bottomnavbar></Bottomnavbar>
    
    </div>
    
    
    

    
    

);
}

export default Goodgiving;