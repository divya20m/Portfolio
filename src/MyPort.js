import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';
import { Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { users } from './Project';
import imageSrc from './Image/image.jpg'

export function MyPort({handlefrontend,deployedhandlefrontend,textShadow}) {
  const [githubClicked, setGithubClicked] = useState(false);
  const [resume, setResume] = useState(false);
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(3),
    ...theme.typography.body2,
    textAlign: 'center',
    fontSize: '1.5rem',
    color:'purple',
    display: 'flex',         
    alignItems: 'center',
    cursor:'pointer',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
    border: "2px solid pink",
    '&:hover': {
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)',
      backgroundColor: '#FFE4E1',
      color: 'coral',
    }
  }));
  const navigate=useNavigate()
   const handleGithubClick = () => {
    setGithubClicked(true);
    window.open('https://github.com/divya20m', '_self');
  };
  const handleResume = () => {
    setResume(true);
    window.open('https://drive.google.com/file/d/1vmJJ6HtDpVBQvEgRxv_TViMJ5F2mLZRs/view?usp=drive_link', '_self');
  };
  return (
    <div className='My-Port' >
     
     <div className="about-me">
        
        <div className='my-img'><img src={imageSrc} alt='DivyaM' className="image"/></div>
        
        <div className='my-info'><p>I'm <span className="name-highlight"> M Divya</span>, a Physics graduate from St. Xavier's College. While
              studying, I stumbled upon the captivating world of coding,
              sparking a profound interest that continues to drive my learning
              journey today. Beyond the complexities of code, I'm captivated by
              the strategic depth of chess—a game that challenges my mind and
              fuels my passion for strategy and critical thinking. Music is my
              sanctuary, weaving its melodies into the tapestry of my life,
              offering inspiration and solace in every note.</p>
            <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
            <div  onClick={handleGithubClick} className='icon'><a href='https://github.com/divya20m' target='_self'><GitHubIcon style={{ fontSize: 29 }}/></a>GitHub</div>
            <div  onClick={handleResume} className='icon'><a href='https://github.com/divya20m' target='_self'><SentimentVerySatisfiedIcon style={{ fontSize: 29 }}/></a>Resume</div>
          </div>
            </div>
      </div>


      <div className='sub-skills'>
            <h2 style={{textShadow:textShadow}}>My Skills</h2>
           <div className='paper'>
           <Stack direction="row"  spacing={3.5}>
           <DemoPaper variant="outlined">JavaScript</DemoPaper>
      <DemoPaper variant="outlined">Node.js</DemoPaper>
      <DemoPaper variant="outlined">SQL</DemoPaper>
      <DemoPaper variant="outlined">MongoDB</DemoPaper>
      <ReadMoreIcon className='icon' onClick={()=>navigate("/portfolio/skill")}/>
    </Stack>
           </div>
          </div>

          <div className='sub-projects'>
      <h2 style={{textShadow:textShadow}}>Projects</h2>
      <div  className='cards'>
      {users.slice(0, 2).map(user => (
        <div className='one-card' key={user.id}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="h5" component="div">
              {user.URL}
            </Typography>
          </CardContent>
          <CardActions>
                <Button color="secondary" onClick={() => handlefrontend(user.sourcefrontend)} size="small">Source Frontend</Button>
                <Button color="secondary" onClick={() => deployedhandlefrontend(user.deployedfrontendurl)} size="small">Deployed Frontend</Button>
          </CardActions>
        </Card>
      </div>
      ))}
       <ReadMoreIcon className='icon' onClick={()=>navigate("/portfolio/projects")}/>
      </div>
    </div>
    </div>
  );
}
