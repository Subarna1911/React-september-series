import React from "react";
import useChips from "../hooks/useChips";

const ChipsInput = () => {
  const { chips, enteredTxt, handleChange, handlBtnClick, handleKeys } =
    useChips();

  return (
    <div className="mx-auto px-5 py-6 flex flex-col items-center bg-blue-300 h-screen">
      <h1 className="text-xl font-bold py-3">Chips Input</h1>
      <div className="w-80 border border-amber-500 rounded-lg">
        <input
          className="border-none bg-white text-black outline-none rounded-lg px-3 py-2 w-full"
          type="text"
          placeholder="enter your  text"
          onChange={handleChange}
          value={enteredTxt}
          onKeyDown={handleKeys}
        />
      </div>

      <div className="flex items-center gap-3 list-none mt-4 shadow-2xl">
        {chips.map((chip, index) => (
          <span
            key={index}
            className="flex gap-3 bg-white rounded-md px-4 py-3 items-center"
          >
            <li>{chip}</li>
            <button
              onClick={() => handlBtnClick(index)}
              className="bg-red-600 text-white rounded-md px-4 py-2 content-center hover:bg-red-400 cursor-pointer"
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
