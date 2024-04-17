import { useNavigate,Link } from "react-router-dom";
import { button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StreamIcon from "@mui/icons-material/Stream";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PhoneIcon from "@mui/icons-material/Phone";
import StarsIcon from "@mui/icons-material/Stars";

export function AppBar() {
  const Navigate = useNavigate();
  return (
    <div>
      <div className="navigation">
       
       

        <button
        className="button"
        onClick={() => window.location.href = "#skill-section"}
        >
          <StreamIcon />
          Skills
        </button> 
      

        <button
        className="button"
          color="secondary"
          style={{ gap: "5px" }}
          onClick={() => window.location.href = "#project-section"}
        >
          <EngineeringIcon />
          Project
        </button>
        <button
        className="button"
          color="secondary"
          style={{ gap: "5px" }}
          onClick={() => Navigate("/portfolio/achievement ")}
        >
          <StarsIcon />
          Others{" "}
        </button>
        <button
        className="button"
          color="secondary"
          onClick={() =>window.location.href = "#contact-section"}
        >
          {" "}
          <PhoneIcon />
          Contact Me{" "}
        </button>
      </div>
    </div>
  );
}
