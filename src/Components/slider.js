import React, { useState } from 'react';

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden rounded-md shadow-lg mx-auto my-8 w-[65%] bg-[#21a4a5]">
        {/* Left side - Image */}
        <div className="w-1/2">
          <img src={cards[currentIndex].image} alt={`Card ${currentIndex + 1}`} className="w-full h-64 object-cover md:h-full md:w-full" />
        </div>
        <button onClick={prevCard} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 rounded-full px-4 py-2 text-white">
        &#8592; {/* Left arrow */}
      </button>

        {/* Right side - Title, Description, Age */}
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-semibold">{cards[currentIndex].title}</h2>
          <p className="text-gray-600">{cards[currentIndex].description}</p>
          <p className="text-gray-500 mt-2">Age: {cards[currentIndex].age}</p>
        </div>
      </div>

     

      {/* Next Button */}
      <button onClick={nextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 rounded-full px-4 py-2 text-white">
        &#8594; {/* Right arrow */}
      </button>
    </div>
  );
};

export default CardCarousel;