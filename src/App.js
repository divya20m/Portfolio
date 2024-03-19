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
  const backgroundColor = mode === "dark" ? "rgb(44, 40, 40)" : "white";
  const textColor = mode === "dark" ? "#ffffff" : "#444444";
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

  
  return (
    <ThemeProvider theme={Theme}>
      <div
        className="App"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        <div className="navigation">
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
            style={{ gap: "20px" }}
            onClick={() => Navigate("/portfolio/skill")}
          >
            <StreamIcon />
            Skills
          </Button>
          <Button
            color="secondary"
            style={{ gap: "10px" }}
            onClick={() => Navigate("/portfolio/projects")}
          >
            <EngineeringIcon />
            Project
          </Button>
          <Button
            color="secondary"
            style={{ gap: "10px" }}
            onClick={() => Navigate("/portfolio/achievement ")}
          >
            <StarsIcon />
            Others{" "}
          </Button>
          <Button
            style={{ marginTop: "500px", gap: "10px" }}
            color="secondary"
            onClick={() => Navigate("/portfolio/contactdetails")}
          >
            {" "}
            <PhoneIcon />
            Contact Me{" "}
          </Button>
        </div>
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
        <Routes>
          <Route
            path="/"
            element={
              <MyPort
                handlefrontend={handlefrontend}
                deployedhandlefrontend={deployedhandlefrontend}
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
              />
            }
          />
          <Route path="/portfolio/achievement" element={<Achievements />} />
          <Route path="/portfolio/contactdetails" element={<ContactMe />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
