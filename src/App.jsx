import { BrowserRouter } from "react-router-dom";



import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-paper-pattern bg-cover">
        <div className="bg-donut-pattern bg-contain bg-no-repeat bg-center">
          <Navbar />
          <Hero />
            <About />
        </div>
        </div>
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works/>
        {/* <Feedbacks /> */}
        <StarsCanvas />
        <div className="relative z-0">
          <Contact/>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
