import "./App.css";
import { MyPort } from "./MyPort";
import { Skill } from "./Skill";
import { Project } from "./Project";
import { ContactMe } from "./ContactMe";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StreamIcon from "@mui/icons-material/Stream";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PhoneIcon from "@mui/icons-material/Phone";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import StarsIcon from "@mui/icons-material/Stars";
import { Achievements } from "./Achievements";

function App() {
  const [frontendlink, setFrontendLink] = useState(false);
  const [backendlink, setBackendLink] = useState(false);
  const [deployedfrontendlink, setDeployedFrontendlink] = useState(false);
  const [mode, setMode] = useState("dark");

  const Navigate = useNavigate();

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const texColors=mode==='dark'?"pink":"coral"
  const backgroundColor = mode === "dark" ? "rgb(44, 40, 40)" : "white";
  const label = { inputProps: { "aria-label": "Size switch demo" } };

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

  
   const boxShadow= mode === 'light' ? '0 0 20px rgba(0, 0, 0, 0.2)' : '0 0 10px rgba(255, 255, 255, 0.5)';
   const textShadow = mode === 'light' ? '1px 1px 2px rgba(0, 0, 0, 0.1)' : '1px 1px 2px rgba(255, 255, 255, 0.4)';  
  return (
    <ThemeProvider theme={Theme}>
      <div
        className="App"
         style={{ backgroundColor: backgroundColor, color:texColors}}
      >
        <div style={{boxShadow:boxShadow}} className="navigation" >
          <Button
            color="secondary"
            style={{ gap: "10px" }}
            onClick={() => Navigate("/")}
          >
            {" "}
            <InfoIcon /> About Me
          </Button>
          <Button
            color="secondary"
            style={{ gap: "5px" }}
            onClick={() => Navigate("/portfolio/skill")}
          >
            <StreamIcon />
            Skills
          </Button>
          <Button
            color="secondary"
            style={{ gap: "5px" }}
            onClick={() => Navigate("/portfolio/projects")}
          >
            <EngineeringIcon />
            Project
          </Button>
          <Button
            color="secondary"
            style={{ gap: "5px" }}
            onClick={() => Navigate("/portfolio/achievement ")}
          >
            <StarsIcon />
            Others{" "}
          </Button>
          <Button
            color="secondary"
            onClick={() => Navigate("/portfolio/contactdetails")}
          >
            {" "}
            <PhoneIcon />
            Contact Me{" "}
          </Button>
          <div className="switch">
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                color="secondary"
                onClick={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
              />
            }
            label={mode === "light" ? "Dark Mode" : "Light Mode"}
            labelPlacement="start"
          />
        </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <MyPort
                handlefrontend={handlefrontend}
                deployedhandlefrontend={deployedhandlefrontend}
                boxShadow={boxShadow}
                textShadow={textShadow}
              />
            }
          />
          <Route path="/portfolio/skill" element={<Skill />} />
          <Route
            path="/portfolio/projects"
            element={
              <Project
                handlebackend={handlebackend}
                handlefrontend={handlefrontend}
                deployedhandlefrontend={deployedhandlefrontend}
               
                textShadow={textShadow}
              />
            }
          />
          <Route path="/portfolio/achievement" element={<Achievements  textShadow={textShadow} />} />
          <Route path="/portfolio/contactdetails" element={<ContactMe  textShadow={textShadow}/>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
