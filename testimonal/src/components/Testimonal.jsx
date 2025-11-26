import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { useState } from "react";

const Testimonal  = (props)=>{
     let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }

    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }




    return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg">
      <Card review={reviews[index]} />

      {/* Arrow buttons */}
      <div className="flex justify-center items-center mt-6 text-3xl gap-6 text-violet-600">
        <button onClick={leftShiftHandler} className="hover:text-violet-800 transition">
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className="hover:text-violet-800 transition">
          <FiChevronRight />
        </button>
      </div>

      {/* Surprise Me Button */}
      <button
        onClick={surpriseHandler}
        className="mt-6 bg-violet-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-600 transition duration-300"
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Testimonal;