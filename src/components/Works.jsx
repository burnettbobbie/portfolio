import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import img from '../assets/Projects.png';
import { BallCanvas } from "./canvas";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-yellow-400 p-5 rounded-2xl sm:w-[300px] w-full"
      > */}
      <div className="bg-[rgba(1,1,1,0.9)] h-[700px] p-5 rounded-2xl w-full md:w-[80vw] lg:w-[39vw] ">
        <div className="relative w-full ">
          <img
            src={image}
            alt={name}
            className="w-full h-[250px] object-cover rounded-2xl z-5 border-[2px] border-zinc-800 shadow-[0px_0px_25px_white]"
          />
          

        </div>
        <div className="w-full flex flex-row mt-1 justify-between card-img_hover">
          <div className="bg-gradient-to-t from-zinc-950 to-slate-200 text-white shadow-[8px_8px_30px_black] hover:shadow-none cursor-pointer rounded-full m-3 w-32 h-10 flex items-center justify-center"> View Site

          </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=" m-3 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
               <div className=" bg-white border-[2px] border-yellow-300  shadow-[inset_4px_4px_5px_black] hover:shadow-[inset_6px_6px_8px_black] rounded-full m-3 w-40 h-10 flex items-center justify-center"> source code

              </div>
              <img
                src={github}
                alt="github"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[16px]">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-5">
          {tags.map((tag) => (
            <div className={`flex items-center justify-center flex-col text-[14px] ${tag.color}`} key={tag.name}>#{tag.name}
              <img src={tag.icon} className="w-[30px] h-[30px]"/>
            </div>
          ))}
        </div>
        </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <img src={img} alt="projects"/>
        <h2 className="text-black">Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black text-[17px] max-w-full leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
