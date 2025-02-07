import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <button
        disabled={isOpen}
        className="z-20 absolute rounded-full bottom-[-5rem] left-[-2rem] h-44 w-44 bg-sky-300"
        onClick={() => setisOpen(true)}
      >
        <div className="absolute top-6 left-16">
          <img className="w-14" src="/images/wisdom-icon.svg" />
        </div>
      </button>
      {
        <div
          className={`z-10 absolute ${
            isOpen
              ? "left-0 top-0 rounded-tr-3xl"
              : "-left-64 top-full rounded-tr-full"
          } bg-sky-300 w-72 h-screen transition-all duration-500 text-white font-poppins py-2 px-6`}
        >
          <div className="flex w-full justify-end">
            <button
              className="text-white text-5xl"
              onClick={() => setisOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <img
              src="/images/sample-profile.svg"
              className="rounded-full object-cover mb-1"
            />
            <p className="font-semibold text-4xl">USER</p>
          </div>
          <div className="flex flex-col items-start w-full py-2">
            <p className="text-xl mb-1">Level Progress:</p>
            <div className="w-full rounded-full h-6 bg-gray-300 relative mb-1">
              <div className="w-1/6 rounded-full h-full bg-sky-400"></div>
            </div>
            <div className="flex justify-between text-[0.75rem] w-full mb-2">
              <div></div>
              <div>Game 1</div>
              <div>Game 2</div>
              <div>Game 3</div>
              <div>Game 4</div>
            </div>
            <ul className="text-sm text-left">
              <li className="mb-1">Game 1: Whack-a-mole</li>
              <li className="mb-1">Game 2: Dino Game</li>
              <li className="mb-1">Game 3: TypeTest (Word)</li>
              <li className="mb-1">Game 4: TypeTest (Paragraph)</li>
            </ul>
          </div>
          <div className="text-xl mb-4">
            Project by:
            <img src="/images/technokids-logo.svg" className="my-2" />
            <img src="/images/wisdom-logo.svg" className="my-2" />
          </div>
          <div className="flex text-base w-full justify-center items-center">
            Theme:
            <button className="ml-2 mr-1 w-6 h-6 bg-sky-300 rounded-full border border-white">
            </button>
            <button className="mx-1 w-6 h-6 bg-black rounded-full border border-white">
            </button>
            <button className="mx-1 w-6 h-6 bg-pink-300 rounded-full border border-white">
            </button>
            <button className="mx-1 w-6 h-6 bg-orange-300 rounded-full border border-white">
            </button>
            <button className="ml-2 w-6 h-6 bg-lime-300 rounded-full border border-white">
            </button>
          </div>
        </div>
      }
    </div>
  );
}

export default Sidebar;
