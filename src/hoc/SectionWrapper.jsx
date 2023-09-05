import { motion } from "framer-motion";
import useScrollSnap from "react-use-scroll-snap";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useRef } from "react";

const StarWrapper = (Component, idName) =>
  function HOC() {
      
const scrollRef = useRef(null);
useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-[90vw] mx-auto min-h-[100vh] relative z-0 bg-transparent `}
        id={idName}
        ref={scrollRef}
      >
        <span className='hash-span'>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
