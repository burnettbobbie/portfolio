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
  enjoyedPoints,
  improvePoints,
  tags,
  images,
  source_code_link,
  view_site,

}) => {
  return (
    <>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)} className="hidden desktop-project-card sm:block">
      <div className="bg-[rgba(1,1,1,0.9)] min-h-[900px] f items-center  w-[85vw] p-5 rounded-2xl md:w-[70vw] lg:w-[40vw] xl:w-[44vw] ">
        <div className="relative w-full  ">
            <Carousel showThumbs={false} showStatus={false} className="lg:h-[300px]">
              {images.map((image, idx) => (
                <div key={`carousel-image-${idx}`}>
                  <img
                    src={image}
                    alt={`${name} - Image ${idx + 1}`}
                    className="work-image object-cover lg:object-contain z-5 w-[360px] h-[196.36px] md:w-[750px] md:h-[409px] lg:h-[300px] lg:w-[550px]"
                  />
                </div>
              ))}
            </Carousel>
        </div>
        <div className="w-full flex flex-row mt-1 justify-between scale-75 xs:scale-100">
            <div className="md:bg-gradient-to-t md:from-zinc-950 md:to-slate-300  text-yellow-100 md:text-white  md:shadow-[8px_8px_30px_black] hover:shadow-none cursor-pointer rounded-full m-3 w-40 h-10 flex items-center justify-center" onClick={() => window.open(view_site, "_blank")}>View Site
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
        <div className="mt-2 text-white text-[16px] min-h-[590px] lg:min-h-[610px] ">
          <h3 className=" font-bold text-[20px]">{name}</h3>
          <p className="mt-2 ">{description}</p>
          <p className="m-1  text-yellow-100">What I Enjoyed</p>
          {enjoyedPoints && enjoyedPoints.length > 0 ? (
            <ul className="text-[14px]">
              {enjoyedPoints.map((point, index) => (
                <li key={`improve-point-${index}`}>
                  <span>&#9702;</span> {point}
                </li>
              ))}
            </ul>
          ) : (
            <p>No</p>
          )}
          <p className="m-1 text-yellow-100">Future thoughts</p>
       
            <ul className="text-[14px]">
              {improvePoints.map((point, index) => (
                <li key={`improve-point-${index}`}>
                  <span>&#9702;</span> {point}
                </li>
              ))}
            </ul>
      
        </div>
        <div className="mt-2 flex items-center flex-wrap w-full justify-items-center justify-center gap-4">
          {tags.map((tag) => (
            <div className={`flex justify-items-center items-center justify-center flex-col flex-wrap text-[12px] ${tag.color}`} key={tag.name}>#{tag.name}
              <img src={tag.icon} alt={tag.name} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"/>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)} className="mobile-project-card max-w-[90vw] overflow-x-hidden sm:hidden" >
      <div className="bg-[rgba(1,1,1,0.9)] min-h-[900px] f items-center max-w-full p-[30px] rounded-xl">
        <div className="relative w-full  ">
            <Carousel showThumbs={false} showStatus={false} className="lg:h-[300px]">
              {images.map((image, idx) => (
                <div key={`carousel-image-${idx}`}>
                  <img
                    src={image}
                    alt={`${name} - Image ${idx + 1}`}
                    className="work-image object-cover z-5 h-[196.36px] "
                  />
                </div>
              ))}
            </Carousel>
        </div>
        <div className="w-full flex flex-row mt-1 justify-between scale-75 xs:scale-100">
            <div className="md:bg-gradient-to-t md:from-zinc-950 md:to-slate-300  text-yellow-100 md:text-white  md:shadow-[8px_8px_30px_black] hover:shadow-none cursor-pointer rounded-full m-3 w-40 h-10 flex items-center justify-center" onClick={() => window.open(view_site, "_blank")}>View Site
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
        <div className="mt-2 text-white text-[16px] min-h-[590px] lg:min-h-[610px] ">
          <h3 className=" font-bold text-[20px]">{name}</h3>
          <p className="mt-2 ">{description}</p>
          <p className="m-1  text-yellow-100">What I Enjoyed</p>
          {enjoyedPoints && enjoyedPoints.length > 0 ? (
            <ul className="text-[14px]">
              {enjoyedPoints.map((point, index) => (
                <li key={`improve-point-${index}`}>
                  <span>&#9702;</span> {point}
                </li>
              ))}
            </ul>
          ) : (
            <p>No</p>
          )}
          <p className="m-1 text-yellow-100">Future thoughts</p>
       
            <ul className="text-[14px]">
              {improvePoints.map((point, index) => (
                <li key={`improve-point-${index}`}>
                  <span>&#9702;</span> {point}
                </li>
              ))}
            </ul>
      
        </div>
        <div className="mt-2 flex items-center flex-wrap w-full justify-items-center justify-center gap-4">
          {tags.map((tag) => (
            <div className={`flex justify-items-center items-center justify-center flex-col flex-wrap text-[12px] ${tag.color}`} key={tag.name}>#{tag.name}
              <img src={tag.icon} alt={tag.name} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"/>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
};

const Work = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
        <img src={img} className="w-[280px] h-[70px] mt-4" alt="projects"/>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-[#18181b] bg-slate-100 text-[18px] text-justify font-extralight border-[#18181b] border-0 shadow-lg shadow-slate-600 rounded-lg p-6 mx-[0px] leading-[30px] "
        >
          The following projects serve as tangible demonstrations of my skills and practical experience. Prior to implementation, wireframes and designs for all projects were created using both Figma and Adobe software whilst 
           Git was used for version control during development. To view specific user/admin pages on the websites, please <a href="#contact" className="text-black underline"><i>contact me</i></a> for login credentials. You may also register as a new user if preferred.
           </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5 items-center justify-center overflow-y-hidden">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
