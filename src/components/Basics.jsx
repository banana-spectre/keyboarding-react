import React from "react";
import { Link } from "react-router-dom";

const Basics = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-ful">
      <h1>
        <p className="text-8xl mb-8 font-dokdo">
          <span className="text-blue-400">B</span>
          <span className="text-pink-400">A</span>
          <span className="text-teal-400">S</span>
          <span className="text-sky-400">I</span>
          <span className="text-lime-400">C</span>
          <span className="text-red-400">S</span>
        </p>
      </h1>
      <div className="flex justify-center flex-wrap w-3/4 text-white">
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/1"
            className="font-montserrat text-center flex justify-center items-center w-28 h-28  bg-green-900 border-4 text-4xl font-bold border-green-500 rounded-xl"
          >
            asd
            <br />
            fgh
          </Link>
        </div>
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/2"
            className="font-montserrat text-center border-4 text-4xl font-bold rounded-xl flex justify-center items-center w-28 h-28 bg-blue-900 border-blue-500"
          >
            qwe
            <br />
            rty
          </Link>
        </div>
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/3"
            className="font-montserrat text-center border-4 text-4xl font-bold rounded-xl flex justify-center items-center w-28 h-28 bg-yellow-900 border-yellow-500"
          >
            zxc
            <br />
            vbn
          </Link>
        </div>
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/4"
            className="font-montserrat text-center border-4 text-4xl font-bold rounded-xl flex justify-center items-center w-28 h-28 bg-red-900 border-red-500"
          >
            123
            <br />
            456
          </Link>
        </div>
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/5"
            className="font-montserrat text-center border-4 text-4xl font-bold rounded-xl flex justify-center items-center w-28 h-28 bg-orange-900 border-orange-500"
          >
            -{"["}\<br />
            ;,.
          </Link>
        </div>
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/6"
            className="font-montserrat text-center border-4 text-4xl font-bold rounded-xl flex justify-center items-center w-28 h-28 bg-pink-900 border-pink-500"
          >
            {">"}?:
            <br />
            {"}"}|+
          </Link>
        </div>
        <div className="basis-1/4 my-4 flex justify-center items-center">
          <Link
            to="/basics/7"
            className="font-montserrat text-center border-4 text-4xl font-bold rounded-xl flex justify-center items-center w-28 h-28 bg-violet-900 border-violet-500"
          >
            ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Basics;
