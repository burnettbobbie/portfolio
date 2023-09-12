import { motion, easeInOut } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/bouncy ball.json";
import img from '../assets/bobbienodot.png';
import vid from '../assets/bobbie-tv.mp4';


const Landing = () => {
  return (
    <>
      <section className="flex items-center justify-center max-w-fit h-screen mx-auto relative pt-[80vh] xs:pt-[15vh] sm:pt-[10vh]  ">
      <motion.div initial={{ y: -250, opacity: 0, rotate:60 }} animate={{ y: 0, opacity: 1, rotate: -20, transition: { duration: 2.5, ease: easeInOut } }}  className="rounded-[15px] border-[#767676] border-[4px] hidden md:block scale-100 lg:scale-[1] mt-[-55vh] p-0 shadow-white shadow-[-15px_-15px_150px_10px] rotate-[-40deg] absolute">
        <video src={vid} loop autoPlay muted className="rounded-[15px] bg-transparent border-black " alt="bobbie in tv">
        </video>
        </motion.div>
        <div className="text-white text-center ">
          <div className="animation-container ">
            <Lottie
              animationData={animationData}
              className="lottie-animation "
            />
            <img src={img} alt="bobbie-logo" className="w-[305px] h-[100px] inline-block" />
          </div>
          <div  className="flex flex-col mt-[6vh] text-center mb-[40vh] xs:mb-[15vh] sm:mb-[0] mx-[15vw] font-[capriola] lg:leading-10">
            <p className="z-10 text-[24px] ">Junior Full Stack Developer | AFOL | HND Web Engineering</p>
            <p className="text-[16px] z-10 ">Open-minded · Curious · Creative </p>
          <p className="text-center flex flex-row font-[Chivo] text-[20px] text-md mt-4">
          Taking a multidisciplinary approach, my objective is to build applications and websites that function effectively, bring enjoyment, and leave a lasting visual impact!
            </p>
          </div>
          </div>
      </section>
    </>
  );
};

export default Landing;
