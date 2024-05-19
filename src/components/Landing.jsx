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
        <motion.div initial={{ y: -450, opacity: 0, rotate:0}} animate={{ y: 0, opacity: 1, rotate: -15, transition: { delay:0.5, duration: 2, ease: easeInOut, type: "spring", bounce: 0.6  } }}  className="rounded-[15px] border-[#767676] border-[4px] hidden md:block scale-100 lg:scale-[1] mt-[-55vh] p-0 shadow-white shadow-[-15px_-15px_150px_10px] rotate-[-40deg] absolute">
          <video src={vid} loop autoPlay muted className="rounded-[15px] shadow-black shadow-xl bg-transparent border-black " alt="bobbie in tv">
          </video>
        </motion.div>
        <div className="text-white text-center ">
          <div className="animation-container sm:inline-block xs:hidden">
            <Lottie
              animationData={animationData}
              className="lottie-animation "
            />
            <img src={img} alt="bobbie-logo" className="w-[308px] h-[97px] inline-block" />
            <p className="text-right font-krona text-[20px]">Burnett</p>
          </div>
    <div  className="flex flex-col xs:mt-[15vh] md:mt-[6vh] md:text-left mb-[40vh] xs:mb-[15vh] sm:mb-[0]  ">
            <motion.p variants={fadeIn("", "", 0.5, 5)} initial="hidden"
            animate="show" className="z-10 text-[40px] md:text-[60px] flex-wrap bg-clip-text text-transparent font-krona bg-gradient-to-br from-white to-white">Junior Full Stack Developer </motion.p>
            <div className="">
              {/* <div className="xs:p-6 md:pl-10 md:pr-24 md:pt-8 md:pb-8 flex justify-evenly items-center">
                <p className="text-white text-[46px] font-[Krona One] font-[500] leading-8 md:text-left tracking-[10px] -rotate-12">
                  <i>

                Taking a multidisciplinary approach, I aim to build applications and websites that function effectively, bring enjoyment, and leave a lasting visual impact!
                </i>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;


