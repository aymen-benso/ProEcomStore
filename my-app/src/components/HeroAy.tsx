import React from 'react';

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

type HeroAyProps = {
  src: string;
  text: string;
  buttonText: string;
  onClick: () => void;
};

const words = [
  {
    text: "Find",
  },
  {
    text: "awesome",
  },
  {
    text: "products",
  },
  {
    text: "with",
  },
  {
    text: "Storli.",
    className: "text-orange-500 dark:text-orange-500",
  },
];

function HeroAy({src}: HeroAyProps) {

    return (
      <div className="relative w-full h-screen">
      <video autoPlay loop muted className="object-cover w-full h-full top-0">
        <source src={src} type="video/mp4" className='object-cover w-full min-h-full top-0'/>
        Your browser does not support the video tag. 
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="flex flex-col items-center justify-center space-between h-[30rem] w-full text-white absolute top-0 left-0">
      <p className="text-4xl font-bold text-center">
        The road to freedom starts from here
      </p>
      
      <TypewriterEffectSmooth words={words} />

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm opacity-80 hover:bg-orange-500 hover:text-black hover:border-black">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm opacity-80 hover:bg-orange-500 hover:text-white hover:border-transparent">
          Signup
        </button>
      </div>
    </div>
    </div>


      
    )
  }

export default HeroAy;
/*      <MaskContainer revealText={text} className="h-screen w-full">
        <button onClick={onClick} className="text-white bg-black p-4 rounded-lg">
          {buttonText}
        </button>
      </MaskContainer>*/