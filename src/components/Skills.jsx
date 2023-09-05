import React from "react";
import { motion} from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant} from "../utils/motion";
import img from '../assets/skills.png';



const ServiceCard = ({ title}) => (

    <motion.div
      className="mt-[5vh] rounded-[20px] shadow-blue-900 shadow-2xl w-[250px] ">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[rgba(255,255,255,0.3)] drop-shadow-2xl h-[100px] shadow-[inset_8px_8px_30px_white] rounded-[20px] p-[35px] flex justify-evenly items-center flex-col"
      >

        <h3 className="text-zinc-900 text-[20px] font-bold text-center tracking-[4px]">
          {title}
        </h3>
      </div>
    </motion.div>
 
);

const Skills = () => {

  return (
    < >
      <motion.div variants={textVariant()} className="mt-[5vh]">
        <img src={img} alt="overview"/>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[20px] max-w-5xl leading-[30px]"
      >
       Proficient in both front-end and back-end development, I have practical experience building interactive and responsive websites and applications. My keen eye for aesthetics and attention to detail translate into clean and visually appealing user interfaces. With a robust grasp of the entire web development stack, I implement clean code practices to ensure the maintainability and efficiency of my projects. I excel in problem-solving, adapting to new technologies and trends, and effectively communicating within team environments. My passion lies in leveraging these skills to craft user-centric web solutions that stand out in today's digital landscape.
      </motion.p>


      <motion.div  variants={fadeIn("left", "spring", 0)} className="services mt-6 flex flex-wrap items-center justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service} />
        ))}
        
      </motion.div>
      <motion.div  className="my-tech flex-wrap font-['Capriola'] mt-[5vh]  mb-4 text-white">
        <motion.p variants={fadeIn("right", "spring", 0.1)}>HTML5</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("left", "spring", 0.2)}>CSS3</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("right", "spring", 0.3)}>JavaScript</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("left", "spring", 0.4)}>React.js</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("right", "spring", 0.5)}>Tailwind</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("left", "spring", 0.6)}>Express.js</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("right", "spring", 0.7)}>Node.js</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("left", "spring", 0.8)}>MongoDB</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("right", "spring", 0.9)}>SQL</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("left", "spring", 1)}>PHP</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("right", "spring", 1.1)}>Git</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("left", "spring", 1.2)}>Figma</motion.p>
        {/* <p>·</p> */}
        <motion.p variants={fadeIn("right", "spring", 1.3)}>Three.js</motion.p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
