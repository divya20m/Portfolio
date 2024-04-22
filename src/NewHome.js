import { AppBar } from "./AppBar";
import imageSrc from "./Image/image.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { useState } from "react";
import { Skill } from "./Skill";
import { Project } from "./Project";
import { ContactMe } from "./ContactMe";
import EmailIcon from "@mui/icons-material/Email";

export function NewHome({
  handlefrontend,
  deployedhandlefrontend,
  handlebackend,
}) {
  const [githubClicked, setGithubClicked] = useState(false);
  const [resume, setResume] = useState(false);
  const handleGithubClick = () => {
    setGithubClicked(true);
    window.open("https://github.com/divya20m", "_blank");
  };
  const handleResume = () => {
    setResume(true);
    window.open(
      "https://drive.google.com/file/d/1Km7qDAOkwhjbA_14D-tdjTkPXlxqv_VM/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div>
      <AppBar />
      <div className="image-info">
        <img src={imageSrc} alt="DivyaM" className="image" />
        <div className="my-info">
          <p>
            I'm <span className="name-highlight"> M Divya</span>, a Physics
            graduate from St. Xavier's College. While studying, I stumbled upon
            the captivating world of coding, sparking a profound interest that
            continues to drive my learning journey today. Beyond the
            complexities of code, I'm captivated by the strategic depth of
            chess—a game that challenges my mind and fuels my passion for
            strategy and critical thinking. Music is my sanctuary, weaving its
            melodies into the tapestry of my life, offering inspiration and
            solace in every note.
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <div onClick={handleGithubClick} className="icon">
              <a href="https://github.com/divya20m" target="_blank">
                <GitHubIcon style={{ fontSize: 29 }} />
              </a>
              GitHub
            </div>
            <div onClick={handleResume} className="icon">
              <a href="https://drive.google.com/file/d/1Km7qDAOkwhjbA_14D-tdjTkPXlxqv_VM/view?usp=sharing" target="_blank">
                <SentimentVerySatisfiedIcon onClick={handleResume} style={{ fontSize: 29 }} />
              </a>
              Resume
            </div>
          </div>
        </div>
      </div>
      <div  id="project-section">
      <Project 
        handlebackend={handlebackend}
        handlefrontend={handlefrontend}
        deployedhandlefrontend={deployedhandlefrontend}
      />
      </div>
     <div id="skill-section"> <Skill /></div>
      <div id="contact-section"><ContactMe /></div>
      <div className="bottom-box">
        <div className="email-bottom">
          <EmailIcon /> <span>divya20m07@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
