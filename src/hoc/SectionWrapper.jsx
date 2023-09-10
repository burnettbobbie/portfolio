import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";


const StarWrapper = (Component, idName) =>
  function HOC() {
      

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-[100vw] m-0 mt-[-10vh] min-h-[100vh] relative z-0 bg-transparent overflow-x-hidden xxs:mt-[10vh] `}
        id={idName}
      >
        <span className='hash-span'>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
