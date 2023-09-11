import React from "react";
import { motion} from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant} from "../utils/motion";
import Skill from "./Skill"; 
import { skills } from "../constants";
import img from '../assets/skills.png';
import { useState } from "react";


const ServiceCard = ({ title}) => (

    <motion.div
      className=" mt-[5vh] rounded-[20px] shadow-blue-900 shadow-2xl w-[200px] ">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[rgba(255,255,255,0.3)] border-b-[10px] border-slate-600 drop-shadow-2xl h-[100px] shadow-[inset_8px_8px_30px_white] rounded-[20px] p-[35px] flex justify-evenly items-center flex-col"
      >

        <h3 className="text-zinc-900 text-[18px] font-extrabold text-center tracking-[4px]">
          {title}
        </h3>
      </div>
    </motion.div>
 
);

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (index) => {
    setHoveredSkill(index);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    < >
      <motion.div variants={textVariant()} className="mt-[0vh]">
        <img src={img} alt="skills"/>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-white text-[20px] font-extralight max-w-5xl mx-[10px] leading-[30px]"
      >
       Proficient in both front-end and back-end development, I have practical experience building interactive and responsive websites and applications. My keen eye for aesthetics and attention to detail translate into clean and visually appealing user interfaces. With a robust grasp of the entire web development stack, I implement clean code practices to ensure the maintainability and efficiency of my projects. I excel in problem-solving, adapting to new technologies and trends, and effectively communicating within team environments. My passion lies in leveraging these skills to craft user-centric web solutions that stand out in today's digital landscape.
      </motion.p>

      <motion.div  variants={fadeIn("left", "spring", 0)} className="services mt-0 mb-10 flex flex-wrap items-center justify-evenly ">
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service} />
        ))}
      </motion.div>
      <motion.div className="detailed-description hidden invisible md:block md:visible">
        {hoveredSkill !== null && (
          <p className="skills-desc">{skills[hoveredSkill].detailedDescription}</p>
        )}
      </motion.div>

      <motion.div className="my-tech flex-wrap font-['Capriola'] mt-[0vh]  mb-4 text-white">
      {skills.map((skill, index) => (
          <Skill
            key={index}
            skillImage={skill.skillImage}
            skillAlt={skill.skillAlt}
            skillDescription={skill.skillDescription}
            variants={skill.variants}
            detailedDescription={skill.detailedDescription}
            isHovered={index === hoveredSkill}
            onMouseEnter={() => handleSkillHover(index)}
            onMouseLeave={handleSkillLeave}
          />
        ))}
      </motion.div>
      
      {/* Display detailed description for the hovered skill */}

    </>
  );
};

export default SectionWrapper(Skills, "skills");
