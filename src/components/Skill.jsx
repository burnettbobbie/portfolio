import React, { useState } from "react";
import { motion } from "framer-motion";

const Skill = ({ skillImage, skillAlt, skillDescription, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSkillHover = () => {
    setIsHovered(true);
  };

  const handleSkillLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="skill"
      onMouseEnter={handleSkillHover}
      onMouseLeave={handleSkillLeave}
      variants={variants}
      
    >
      <img src={skillImage} alt={skillAlt} variant={variants} style={{ opacity: isHovered ? 0 : 1 }}/>
      {isHovered && <p className="skill-description " >{skillDescription}</p>}
    </motion.div>
  );
};

export default Skill;
