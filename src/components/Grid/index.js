import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90px',
    marginLeft: '20px',
    marginRight: '20px'
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <Zoom>
    <div className={classes.root}>
      <Grid container spacing={7}>
        <Grid item xs>
          <Paper className={classes.paper}><a href="https://mcowley1.github.io/Cocktail-U/">CockTail-U</a></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><a href="https://langmentor.herokuapp.com/">LangMentor</a></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><a href="https://mcowley1.github.io/timed-quiz/">Timed-Quiz</a></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={7}>
        <Grid item xs>
          <Paper className={classes.paper}><a href="https://style-blog.herokuapp.com/">Tech-blog</a></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><a href="https://mcowley1.github.io/taskmaster-pro/">taskmaster-pro</a></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><a href="https://mcowley1.github.io/run-buddy/">run-buddy</a></Paper>
        </Grid>
      </Grid>
    </div>
    </Zoom>
  );
}