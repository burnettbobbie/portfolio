import React from "react";
import { motion } from "framer-motion";

const Skill = ({ skillImage, skillAlt, skillDescription, variants, detailedDescription, isHovered, onMouseEnter, onMouseLeave }) => {

  const handleSkillHover = () => {
    onMouseEnter(); 
  };

  const handleSkillLeave = () => {
    onMouseLeave(); 
  };

  return (
    <motion.div
      className="skill"
      onMouseEnter={handleSkillHover}
      onMouseLeave={handleSkillLeave}
      variants={variants}
      detailedDescription={detailedDescription}
    >
      <img src={skillImage} alt={skillAlt} variant={variants} className="skill-image glimmer w-[70px] h-[70px] bg-[#18181b83] shadow-lg shadow-slate-700 rounded-lg" style={{ opacity: isHovered ? 0 : 1 }}/>
      {isHovered && <p className="skill-description">{skillDescription}</p>}
    </motion.div>
  );
};

export default Skill;
