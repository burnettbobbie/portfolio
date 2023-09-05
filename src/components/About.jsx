import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import img from '../assets/skills.png';



const ServiceCard = ({ index, title, icon}) => (


  // <Tilt className="xs:w-[250px] w-full">
    <motion.div
      className="w-full  p-[1px] rounded-[20px] shadow-card xs:w-[250px]">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[rgba(255,255,255,0.1)] drop-shadow-2xl shadow-[inset_8px_8px_30px_white] rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
      >
        {/* <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        /> */}

        <h3 className="text-white text-[20px] font-light text-center">
          {title}
        </h3>
      </div>
    </motion.div>
 
);

const About = () => {

  return (
    < >
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <img src={img} alt="overview"/>
        {/* <h2 className={styles.sectionHeadText}>Overview.</h2> */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer with experience in TypeScript and
        JavaScript, and experience with frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems.
      </motion.p>


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service} />
        ))}
        
      </div>
      <motion.div  className="my-tech xl:flex-nowrap flex-wrap rounded-[20px] mt-10 mb-4 text-white">
        <motion.p variants={fadeIn("right", "spring", 0.1)}>HTML5</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("left", "spring", 0.2)}>CSS3</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("right", "spring", 0.3)}>JavaScript</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("left", "spring", 0.4)}>React</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("right", "spring", 0.5)}>Tailwind</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("left", "spring", 0.6)}>Express.js</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("right", "spring", 0.7)}>Node.js</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("left", "spring", 0.8)}>MongoDB</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("right", "spring", 0.9)}>SQL</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("left", "spring", 1)}>PHP</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("right", "spring", 1.1)}>Git</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("left", "spring", 1.2)}>Figma</motion.p>
        <p>·</p>
        <motion.p variants={fadeIn("right", "spring", 1.3)}>Three.js</motion.p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "skills");
