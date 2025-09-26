import React, { useState } from "react";
import {accordionItems} from '../utils/AccoridanData'

const Accordian = () => {




  const [isActiveIndex, setIsActiveIndex] = useState(null);

  const handleClick = (index) => {
    setIsActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="bg-blue-300 text-white p-8 mb-2 rounded-lg"
        >
          <div
            onClick={() => handleClick(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2>{item.title}</h2>
            <span>{isActiveIndex === index ? "-" : "+"}</span>
          </div>

          {isActiveIndex === index && (
            <p className="mt-2">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
