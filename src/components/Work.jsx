import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import img from '../assets/Projects.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
  view_site
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-[rgba(1,1,1,0.9)] min-h-[800px] flex-wrap p-5 rounded-2xl w-[87vw] md:w-[80vw] lg:w-[44vw]">
      <div className="relative w-full">
          <Carousel showThumbs={false} showStatus={false}>
            {images.map((image, idx) => (
              <div key={`carousel-image-${idx}`}>
                <img
                  src={image}
                  alt={`${name} - Image ${idx + 1}`}
                  className="w-full h-[300px] object-cover z-5"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-full flex flex-row mt-1 justify-between ">
          <div className="md:bg-gradient-to-t md:from-zinc-950 md:to-slate-300  text-blue-200 md:text-white  md:shadow-[8px_8px_30px_black] hover:shadow-none cursor-pointer rounded-full m-3 w-40 h-10 flex items-center justify-center" onClick={() => window.open(view_site, "_blank")}>View Site
          </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=" m-3 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
               <div className=" bg-white border-[2px] border-yellow-300  shadow-[inset_4px_4px_5px_black] hover:shadow-[inset_6px_6px_8px_black] rounded-full m-1 w-40 h-10 flex items-center justify-center"> source code

              </div>
              <img
                src={github}
                alt="github"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        <div className="mt-3">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 min-h-[275px] text-secondary text-[16px]">{description}</p>
        </div>
        <div className="mt-2 flex items-center justify-center gap-4">
          {tags.map((tag) => (
            <div className={`flex items-center justify-center flex-col flex-wrap text-[12px] ${tag.color}`} key={tag.name}>#{tag.name}
              <img src={tag.icon} className="w-[30px] h-[30px]"/>
            </div>
          ))}
        </div>
        </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <img src={img} alt="projects"/>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black text-[17px] max-w-full leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. To view user/admin pages on the websites, please <a href="#contact" className="text-blue-500"><i>contact me</i></a> for login credentials. You may also register as a new user if preferred.
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

export default SectionWrapper(Work, "work");
