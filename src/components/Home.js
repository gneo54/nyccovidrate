import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Deposits from '../components/Deposits';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 540;

const styles = theme => ({
  content: {
  	 ...theme.mixins.gutters(),
    //backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    width: '100%'
     
  },
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),    
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 120,
  }
});


/*
const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),    
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 120,
  }
});
*/
function Home(props) {
  

  const { classes } = props;

  //const classes  = useStyles();
  //const classes  = styles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div >
        <div className="App-header">
            <div className={classes.content}>
                <img src={logo} className="App-logo" alt="logo" />
                
        
                {/* Recent Deposits */}
                <Grid container spacing={1}>
                <Grid  item xs={12} sm={6}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits headerTitle="NYC Daily Positivity Rate" extractField="PERCENT_POSITIVE"/>
                    </Paper>
                </Grid>
                <Grid  item xs={12} sm={6}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits headerTitle="NYC 7 Day Avg Positivity Rate" extractField="PERCENT_POSITIVE_7DAYS_AVG"/>
                    </Paper>
                </Grid>            
                
                </Grid>
            </div>
    </div>
    </div>
  );
}
 
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};
//export default withStyles(useStyles)(Home);
export default withStyles(styles)(Home);