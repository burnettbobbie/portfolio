import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bouncy ball.json";
import img from '../assets/bobbienodot.png';

const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center w-full h-screen mx-auto relative">
        <div className="text-white text-center ">
          <div className="animation-container">
            <Lottie
              animationData={animationData}
              className="lottie-animation"
            />
            <img src={img} alt="bobbie-logo" className="inline-block" />
          </div>
          <p className="mt-4 text-lg mx-[10vw] lg:text-xl xl:text-2xl font-['Capriola']">
            As a recent graduate with a background in full-stack web development, <br />
            I bring a passion for crafting unique and functional websites and applications.<br />
            My expertise lies in developing clean and user-friendly interfaces, where attention to detail and design aesthetics play a pivotal role in delivering exceptional user experiences. I pride myself on combining technical proficiency with a keen eye for design to create web solutions that not only work seamlessly but also leave a lasting visual impact.
          </p>
        </div>
        <div className="z-0 absolute w-2/3 left-1/3 h-4/5"></div>
      </section>
    </>
  );
};

export default Landing;
