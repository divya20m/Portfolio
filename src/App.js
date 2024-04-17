import "./App.css";
import { Skill } from "./Skill";
import { Project } from "./Project";
import { ContactMe } from "./ContactMe";
import { Routes, Route,Link  } from "react-router-dom";
import { useState } from "react";
import { Achievements } from "./Achievements";
import { NewHome } from "./NewHome";

function App() {
  const [frontendlink, setFrontendLink] = useState(false);
  const [backendlink, setBackendLink] = useState(false);
  const [deployedfrontendlink, setDeployedFrontendlink] = useState(false);

  const handlebackend = (url) => {
    setBackendLink(true);
    window.open(url, "_blank");
  };

  const handlefrontend = (url) => {
    setFrontendLink(true);
    window.open(url, "_blank");
  };
  const deployedhandlefrontend = (url) => {
    setDeployedFrontendlink(true);
    window.open(url, "_blank");
  };

  
  return (
      <div className="App">
          <Routes>
          <Route path="/" element={<NewHome handlefrontend={handlefrontend} handlebackend={handlebackend} deployedhandlefrontend={deployedhandlefrontend}/>}/>
          <Route path="/portfolio/skill" element={<Skill />} />
          <Route path="/portfolio/projects" element={ <Project handlebackend={handlebackend} handlefrontend={handlefrontend} deployedhandlefrontend={deployedhandlefrontend}/>}/>
          <Route path="/portfolio/achievement" element={<Achievements />} />
          <Route path="/portfolio/contactdetails" element={<ContactMe  />} />
          </Routes>
     </div>
  );
}

export default App;



