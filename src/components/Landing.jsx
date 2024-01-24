import { motion, easeInOut } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bouncy ball.json";
import img from '../assets/bobbienodot.png';
import vid from '../assets/bobbie-tv.mp4';


const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center max-w-fit h-screen mx-auto relative pt-[80vh] xs:pt-[7vh] sm:pt-[15vh] ">
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
          <div  className="flex flex-col mt-[6vh] text-left mb-[40vh] xs:mb-[15vh] sm:mb-[0] mx-[15vw] ">
            <p className="z-10 text-[30px] font-krona ">Junior Full Stack Developer </p>
            <div className="mt-2 rounded-[20px] shadow-zinc-900  shadow-2xl">
              <div className="border-b-[7px] bg-gradient-to-bl from-indigo-200 via-zinc-700 to-zinc-950 border-zinc-50 drop-shadow-xl shadow-[inset_3px_3px_20px_white] rounded-[20px] pl-10 pr-24 pt-8 pb-8 flex justify-evenly items-center">
                <p className="text-white text-[16px] font-[Capriola] font-[100] leading-8 text-left tracking-[2px]"><i>
                Taking a multidisciplinary approach, I aim to build applications and websites that function effectively, bring enjoyment, and leave a lasting visual impact!
                </i></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;


