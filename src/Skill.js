import {Grid, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';

export function Skill({textShadow}) {
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
    height: '80px',
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
      <h2 style={{textShadow:textShadow,fontSize:"2rem"}}>My Skills</h2>
      <div className='skills-paper'>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={4} key={index}> 
            <DemoPaper variant="outlined">{skill}</DemoPaper>
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  );
}
