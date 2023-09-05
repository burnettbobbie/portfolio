import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, ChairCanvas, DonutCanvas } from "./canvas";
import img from '../assets/bobbie.png'; 


const Hero = () => {
  return (
    <>
    <section className={`relative w-full h-screen mx-auto `}>

      <div
        className={`absolute inset-0 top-[220px]  mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-5 `}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fff200]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div className=" ">
          <img src={img} alt="bobbie-logo"/>
          {/* <h1 className={`${styles.heroHeadText} text-white`}>
            Bobbie
          </h1> */}
          {/* <div className="w-5 h-5 mt-14 ml-4 rounded-full bg-[#fff200]" /> */}
          <p className={`${styles.heroSubText} mt-2 text-white-500 `}>
            Fullstack Web Developer,  <br className="sm:block hidden" />
             web applications, CLEAN web design, with design flair. animation
          </p>
        </div>
      </div>
      
      <DonutCanvas/>
      {/* <ChairCanvas/> */}
      {/* <ComputersCanvas /> */}
                     
    </section>

        </>
  );
};

export default Hero;
