import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bouncy ball.json";
import img from '../assets/bobbienodot.png';
import gif from '../assets/bobbie-tv-gif.gif';


const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center max-w-fit h-screen mx-auto relative pt-[80vh] xs:pt-[40vh] sm:pt-[10vh] ">
      <img src={gif} alt="gif of tv" className="hidden md:block scale-100 lg:scale-105 mt-[-55vh] p-0 shadow-black shadow-[0px_5px_80px_15px] rotate-[-10deg] rounded-[20px] absolute"/>
        <div className="text-white text-center ">
          <div className="animation-container ">
            <Lottie
              animationData={animationData}
              className="lottie-animation "
            />
            <img src={img} alt="bobbie-logo" className="inline-block" />
          </div>
          <div  className="flex flex-col mt-[6vh] text-center text-lg mb-[40vh] xs:mb-[15vh] sm:mb-[0] mx-[10vw] md:text-[26px] font-[capriola] lg:leading-10">
            <p >Junior Full Stack Developer | AFOL</p>
            <p className="text-[18px]">Open-minded · Curious · Creative </p>
          <p className="text-center font-[Chivo]">
           As a recent web engineering graduate, I am commmitted to honing my newly acquired skills and developing original websites and applications that not only deliver optimal solutions but are fun and leave a lasting visual impact..Multidisciplinary
            </p>
          </div>
          </div>
      </section>
    </>
  );
};

export default Landing;
