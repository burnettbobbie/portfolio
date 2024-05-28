import { motion, easeInOut } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bouncy ball.json";
import {fadeIn} from "../utils/motion";
import img from '../assets/bobbienodot.png';
import vid from '../assets/bobbie-tv.mp4';


const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center max-w-fit h-screen mx-auto relative pt-[80vh] xs:pt-[7vh] sm:pt-[25vh] ">
        <motion.div initial={{ y: -450, opacity: 0, rotate:0}} animate={{ y: 0, opacity: 1, rotate: -15, transition: { delay:0.5, duration: 2, ease: easeInOut, type: "spring", bounce: 0.6  } }}  className="tv-animation rounded-[15px] border-[#767676] border-[4px] hidden md:block scale-100 lg:scale-[1] mt-[-55vh] p-0 shadow-white shadow-[-15px_-15px_150px_10px] rotate-[-40deg] absolute">
          <video src={vid} loop autoPlay muted className="rounded-[15px] shadow-black shadow-xl bg-transparent border-black " alt="bobbie in tv">
          </video>
        </motion.div>
        <div className="text-white text-center ">
          <div className="animation-container sm:inline-block xxs:hidden">
            <Lottie
              animationData={animationData}
              className="lottie-animation "
            />
            <img src={img} alt="bobbie-logo" className="w-[308px] h-[97px] inline-block" />
            <p className="text-center font-krona text-[26px] burnett">Burnett</p>
          </div>
          <div className="flex flex-col md:mt-[6vh] md:text-left max-w-[100vw]">
            <motion.p variants={fadeIn("", "", 0.5, 5)} initial="hidden"
            animate="show" className="wide-screen-landing border-white border-2 p-4 rounded-xl z-10 text-[3rem] md:text-[60px] flex-wrap sm:mt-8 text-white text-center font-krona ">Graduate Full-Stack Developer<span className="text-[#f9f834]">.</span> </motion.p>
          <motion.p variants={fadeIn("", "", 0.5, 5)} initial="hidden"
            animate="show" className="mobile-landing z-10 text-[2.7rem] text-center m-4 md:text-[60px] flex-wrap font-krona">Graduate<br></br> Full-Stack Developer<span className="text-[#f9f834]">.</span> </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;


