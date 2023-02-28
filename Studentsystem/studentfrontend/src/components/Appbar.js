import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
           
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Spring Boot React Full Stack Application 
          </Typography>
          <a style={{color:"white" , textDecoration:'none', border:'2px solid blue', padding:'5px',backgroundColor:'blue'}} href="#update"><h7>Update</h7></a>&nbsp;&nbsp;
          <a style={{color:"white" , textDecoration:'none', border:'2px solid red', padding:'5px',backgroundColor:'red'}} href="#delete"><h7 >delete</h7></a>&nbsp;&nbsp;
          <a style={{color:"white" , textDecoration:'none', border:'2px solid green', padding:'5px',backgroundColor:'green'}} href="#show"><h7 >show</h7></a>
       
        </Toolbar>
      </AppBar>
    </div>
  );
}