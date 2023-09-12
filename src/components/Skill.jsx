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
      <img src={skillImage} alt={skillAlt} variant={variants} style={{ opacity: isHovered ? 0 : 1 }}/>
      {isHovered && <p className="w-[70px] h-[70px] skill-description">{skillDescription}</p>}
    </motion.div>
  );
};

export default Skill;
