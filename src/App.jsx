import { BrowserRouter } from "react-router-dom";
import Bigball from "./components/BigBall";


import {
  Skills,
  Contact,
  Landing,
  Navbar,
  Work,
  StarsCanvas
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <div className="bg-paper-pattern bg-cover">
        <div className=" relative">
          <Navbar />
          <div className="absolute z-0 h-[207.5vh] w-full">
          <Bigball className="sm: display-none"/>
          </div>
          <Landing />
          <Skills />
        </div>
        </div>
        <Work/>
        <StarsCanvas />
        <div className="relative z-0">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
