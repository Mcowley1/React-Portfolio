import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';
import Cocktail from '../../assets/cocktail-u.png';
import LangMentor from '../../assets/langmentor.png';
import LightRoom from '../../assets/lightroom-export-2.jpg';
import RunBuddy from '../../assets/run-buddy.png';
import TaskMaster from '../../assets/taskmaster-pro.png';
import TechBlog from '../../assets/tech-blog.png';
import TimedQuiz from '../../assets/timed-quiz.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '30px'
  },
  color: {
      background: 'blue'
  }
}));

const timedQuiz = {
    backgroundImage: `url(${TimedQuiz})`
}

const techBlog = {
    backgroundImage: `url(${TechBlog})`
}

const taskMaster = {
    backgroundImage: `url(${TaskMaster})`
}

const runBuddy = {
    backgroundImage: `url(${RunBuddy})`
}

const lightRoom = {
    backgroundImage: `url(${LightRoom})`
}

const langMentor = {
    backgroundImage: `url(${LangMentor})`
}

const cockTail = {
    backgroundImage: `url(${Cocktail})`
}



export default function AutoGrid() {
  const classes = useStyles();

  return (
    <Zoom>
    <div className={classes.root}>
      <Grid container spacing={7}>
        <Grid item xs>
          <Paper className={classes.paper} style={cockTail}><a href="https://mcowley1.github.io/Cocktail-U/">CockTail-U</a></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={langMentor}><a href="https://langmentor.herokuapp.com/">LangMentor</a></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={timedQuiz}><a href="https://mcowley1.github.io/timed-quiz/">Timed-Quiz</a></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={7}>
        <Grid item xs>
          <Paper className={classes.paper} style={techBlog}><a href="https://style-blog.herokuapp.com/">Tech-blog</a></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={taskMaster}><a href="https://mcowley1.github.io/taskmaster-pro/">taskmaster-pro</a></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={runBuddy}><a href="https://mcowley1.github.io/run-buddy/">run-buddy</a></Paper>
        </Grid>
      </Grid>
    </div>
    </Zoom>
  );
}