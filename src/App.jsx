import { BrowserRouter } from "react-router-dom";

import {
  Skills,
  Contact,
  Landing,
  Navbar,
  Work,
  SpotsCanvas,
  Bigball
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 site-container">
        <div className="bg-cover folio-bg" >
            <Navbar />
            <div className="absolute z-0 h-[207.5vh] w-full">
              {/* <Bigball className="hidden lg:block"/> */}
            </div>
            <Landing />
            <Skills />
        </div>
        {/* <SpotsCanvas /> */}
        <Work/>
        <div className="relative z-0">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
