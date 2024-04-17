import {Paper} from "@mui/material";
import { styled } from '@mui/material/styles';

export function Skill() {
  const skills = [
    "JavaScript",
    "Node.js",
    "SQL",
    "MongoDB",
    "React",
    "HTML",
    "CSS",
    "Express.js",
    "Bootstrap"
  ];

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 'auto',
    minHeight: '50px',
    padding: theme.spacing(4),
    ...theme.typography.body2,
    textAlign: 'center',
    fontSize: '1.5rem',
    color:'purple',
    display: 'flex',         
    alignItems: 'center',
    cursor:"pointer",
    border: "2px solid pink",
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
    '&:hover': {
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
      backgroundColor: '#FFE4E1', 
      color: 'coral',
    }
  }));
  return (
    <div className='skills'>
      <div className="heading">
  <h1 className="heading-title">My Skills</h1>
</div>
      <div className='skills-paper'>
        {skills.map((skill, index) => (
            <DemoPaper variant="outlined">{skill}</DemoPaper>
        ))}
      </div>
    </div>
  );
}
