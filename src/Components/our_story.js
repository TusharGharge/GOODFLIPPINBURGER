import water from '../Assets/Main/wtaergirl.jpg';
function Ourstorycom () {
return (
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
      <div className="bg-black justify-center text-white">
            <p className='text-white'>
            Copyright © 2023 Good Flippin Foods Private Limited - All Rights Reserved.
            </p>
            <h1 className='text-white'>
            Design & Developed Clone by Tushar Gharge
            </h1>

        </div>

    </div>

)
}
export default Ourstorycom;