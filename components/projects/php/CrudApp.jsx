import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


import PhpIcon from '@mui/icons-material/Php';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import { SiPhp } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';



export default function CrudApp() {

  return (
    <Card sx={{ maxWidth: 300}}>
      <CardHeader
        title="Curd Application"
      />
      <CardMedia
        component="img"
        height="194"
        image= "crudhome.png"
        alt="Php and MySQL project"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions  sx = {{ flexDirection: 'column' }}>
        <Typography>Skills used</Typography>
        <Typography>
          <PhpIcon />
          <HtmlIcon />
          <CssIcon />
        </Typography>
        <Typography >
          <AiOutlineConsoleSql/>
          <SiPhp />
        </Typography>
      </CardActions>
    </Card>
  );
}