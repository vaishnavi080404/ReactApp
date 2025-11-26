import React from 'react';
import{FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import Testimonal from './Testimonal';


const Card =(props)=>{
    let review = props.review;
     return (
    <div className="flex flex-col items-center">
      {/* Image + ring */}
      <div className="relative mb-4">
        <div className="absolute w-36 h-36 bg-violet-200 rounded-full top-0 left-0 z-[-1] blur-sm"></div>
        <img
          src={review.image}
          alt={review.name}
          className="w-36 h-36 rounded-full object-cover border-4 border-violet-500"
        />
      </div>

      {/* Name & Job */}
      <h2 className="text-xl font-bold capitalize text-gray-800">{review.name}</h2>
      <p className="uppercase text-sm text-violet-400 mb-3">{review.job}</p>

      {/* Quote Text */}
      <div className="text-violet-400 text-xl mt-2">
        <FaQuoteLeft />
      </div>
      <p className="text-gray-600 mt-2 px-4 text-sm leading-relaxed text-center">{review.text}</p>
      <div className="text-violet-400 text-xl mt-2">
        <FaQuoteRight />
      </div>
    </div>
  );
};
export default Card; 