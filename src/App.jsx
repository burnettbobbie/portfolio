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
        <div className="bg-[#18181bd1] bg-cover ">
            <Navbar />
            <div className="absolute z-0 h-[207.5vh] w-full">
              <Bigball className="hidden lg:block"/>
            </div>
            <Landing />
            <Skills />
        </div>
        <StarsCanvas />
        <Work/>
        <div className="relative z-0">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
