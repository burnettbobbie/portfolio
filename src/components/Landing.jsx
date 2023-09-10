import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bouncy ball.json";
import img from '../assets/bobbienodot.png';
import gif from '../assets/bobbie-tv-gif.gif';


const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center max-w-fit h-screen mx-auto relative xxs:pt-[60vh] xs:pt-[10vh] ">
      <img src={gif} alt="gif of tv" className="hidden md:block xl:scale-100 md:scale-125 lg:scale-150 mt-[-65vh] p-0 shadow-black shadow-[0px_20px_50px_10px] rotate-[-10deg] rounded-[20px] absolute"/>
        <div className="text-white text-center ">
          <div className="animation-container ">
            <Lottie
              animationData={animationData}
              className="lottie-animation "
            />
            <img src={img} alt="bobbie-logo" className="inline-block" />
          </div>
          <div  className="flex flex-row">
          <p className=" mt-[6vh] tracking-wide text-justify text-lg mx-[10vw]  md:text-[26px] leading-[40px] ">
            &nbsp;&nbsp;&nbsp; As a recent web engineering graduate, 
            I bring a passion for crafting unique and functional websites and applications.
            My expertise lies in developing clean and user-friendly interfaces, where attention to detail and design aesthetics play a pivotal role in delivering exceptional user experiences. I pride myself on combining technical proficiency with a keen eye for design to create web solutions that not only work seamlessly but also leave a lasting visual impact.
          </p>
          </div>
          </div>
      </section>
    </>
  );
};

export default Landing;
