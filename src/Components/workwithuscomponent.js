import React from 'react';
import team2 from '../Assets/Main/workwithus/GFB-Process.webp';

const WorkCard = ({Workdata}) => {
  return (
    <div className="h-[600px] mx-auto bg-white shadow-lg overflow-hidden w-[400px]">
      {/* Image Container */}
      <div className="flex items-center justify-center h-60 p-5">
        <img
          className="object-cover object-center w-full h-full"
          src={Workdata.one}
          alt="Card Image"
        />
      </div>

      {/* Text Container */}
      <div className="px-6 pb-2">
        <p className="text-gray-700 text-3xl font-normal pb-3">{Workdata.title}</p>
        <p className="text-gray-700 text-2xl font-light leading-normal">
        {Workdata.description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;