import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';

export function Achievements() {
  const [code, setCode] = useState(false);

  const handlecodekata = (url) => {
    setCode(true);
    window.open(url, '_blank');
  }

  return (
    <div className='achievements'>
      <Card sx={{ minWidth: 300 }}>
        <CardMedia
          sx={{ height: 140,}}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LC3CmQxrJ4W_ZrPw08kruL9UcnaSUZZB0g&usqp=CAU"
          title="CodeKata"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CodeKata
          </Typography>
        </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handlecodekata('https://www.guvi.in/divya20m0749884')}>
              Click Here
            </Button>
          </CardActions>
      </Card>
    </div>
  );
}
