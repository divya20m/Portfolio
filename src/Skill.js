import {Grid, Paper} from "@mui/material";
import Stack from '@mui/material/Stack';
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
    "Express.js"
  ];

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 'auto',
    height: 100,
    padding: theme.spacing(3),
    ...theme.typography.body2,
    textAlign: 'center',
    fontSize: '1.5rem',
    color:'purple',
    display: 'flex',         
    alignItems: 'center',
    border:"1px solid lightcoral",
    cursor:"pointer"
  }));
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className='skills-paper'>
      <Grid container spacing={1.5}>
        {skills.map((skill, index) => (
          <Grid item xs={3} key={index}> 
            <DemoPaper variant="outlined">{skill}</DemoPaper>
          </Grid>
        ))}
      </Grid>
      </div>
    </div>
  );
}
