"use client"; // This is a client component 👈🏽

import { nextFibonacci } from "@/api/nextFibonacciApi";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [index, setIndex] = useState(1);
  const [value, setValue] = useState(0);

  const handleIncrease = async () => {

    let res = await nextFibonacci(index+1);
    setValue(res.data.result);
    setIndex(index + 1);
  };
  const handleDecrease = async() => {
    if (index === 1) {
      toast.warn(`Cannot be reduced by more than 0!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let res = await nextFibonacci(index-1);
      setIndex(index - 1);
      setValue(res.data.result);
    }
  };

  return (
    <div className="grid items-center place-items-center">
      <div className="p-24 sm:p-36 border-2 border-black rounded-lg">
        <div className="text-xl sm:text-3xl font-bold mb-3 text-center">Your Fibonacci</div>
        <div className="flex justify-center items-center space-x-2">
          <button
            className="w-8 h-8 bg-black bg-opacity-80 text-white  rounded-lg  border-transparent hover:bg-opacity-100 focus:bg-opacity-100 focus:border-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-800  duration-300  focus:outline-none"
            onClick={() => handleDecrease()}
          >
            -
          </button>
          <div className="border-2 border-black rounded-lg w-20 text-center">
            {value}
          </div>
          <button
            className="w-8 h-8 bg-black bg-opacity-80 text-white  rounded-lg  border-transparent hover:bg-opacity-100 focus:bg-opacity-100 focus:border-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-800  duration-300  focus:outline-none"
            onClick={() => handleIncrease()}
          >
            +
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}
