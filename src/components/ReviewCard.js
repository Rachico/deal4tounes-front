import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import 'tachyons' ;

const useStyles = makeStyles(theme => ({
  
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  Notliked :{
   color:"yellow",
  },
  likey :{
   color :"red",
   
  }
}));







export default function ReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
const [liked, setLiked]=React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

const handleClick =()=>{
  let x= localStorage.getItem('store');
  fetch(`http://127.0.0.1:8000/api/auth/article/${props.id}`,{
    method:"GET",
headers:{
    Authorization :`Bearer ${x}`
}}).then(response =>{ 
  console.log(response);
  response.json();
}).then(like=>{
  console.log(like);
  console.log(!liked);
 setLiked(!liked);
     
});
}


  return (
    <div className=' dib br3 pa2 ma5 grow bw ' style={{backgroundColor:'rgba(47, 180, 98, 0.822)' }}>
    
    <Card className={classes.root}>
      <CardHeader
        avatar={
          
          <Avatar alt={props.title} src={props.avatar} />
        }
        action={
          <IconButton aria-label="settings" href={props.moreIcon}>
            <MoreVertIcon  />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <CardMedia
        className={classes.media}
        image ={props.content_image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.Typography}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" 
        className={clsx(classes.Notliked, {
          [classes.likey]: liked,
        })}
        onClick={handleClick}
        
        
        >
          <FavoriteIcon  />
        </IconButton>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {props.TypographyParagraph}
          </Typography>
          <Typography paragraph style={{ color:"green",fontFamily:"Open Sans" }}>
            
            Pour consulter l'article complet,cliquez sur le "moreIcon"</Typography>
        </CardContent>
      </Collapse>
    </Card>
     
    </div>
    
  );
}

 /*<IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        */