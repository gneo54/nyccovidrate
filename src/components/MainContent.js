import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText'
import nyclogo from '../nyclogo.svg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Deposits from './Deposits';

import Typography from '@material-ui/core/Typography';


const drawerWidth = 540;

const useStyles = (theme) => ({
  content: {
     ...theme.mixins.gutters(),
     
    //backgroundColor: theme.palette.background.paper,
    
    //paddingTop: theme.spacing.unit * 2,
    //paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1,
    //height: '100vh',
    //overflow: 'auto',
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
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(4)
  },
  listTitle:{
    flexGrow: 1,
    margin: theme.spacing(4, 0, 2),
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(4)
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
class MainContent extends Component {

  
  render() {
  

  //const classes  = useStyles();
  //const classes  = styles();
  const {classes} = this.props;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div >
        <div >
            <div className={classes.content}>
                <img src={nyclogo} className="App-logo" alt="logo" />
                
        
                {/* Recent Deposits */}
                <Grid container spacing={1}>
                <Grid  item xs={12} sm={6}>
                    <Paper className={fixedHeightPaper} elevation={3} >
                        <Deposits headerTitle="NYC Daily Positivity Rate" extractField="PERCENT_POSITIVE"/>
                    </Paper>
                </Grid>
                <Grid  item xs={12} sm={6}>
                    <Paper className={fixedHeightPaper} elevation={3} >
                        <Deposits headerTitle="NYC 7 Day Avg Positivity Rate" extractField="PERCENT_POSITIVE_7DAYS_AVG"/>
                    </Paper>
                </Grid>            
                
                </Grid>
                
                
            </div>
            
            <div infoContainer>
            {/*<Grid item xs={12} md={12}>
                  <Typography variant="h6" className={classes.listTitle}>
                    Misc Info
                  </Typography>
                  <div className={classes.demo}>
                    <List >
                        <ListItem>
                          <ListItemText primary='Source'                            
                            secondary= {(<a href="https://github.com/nychealth/coronavirus-data">https://github.com/nychealth/coronavirus-data</a>)}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary='Find Your Zone'                                                       
                            secondary={(<a href="https://NYC.gov/COVIDZone">NYC.gov/COVIDZone</a>)}
                          />
                        </ListItem>
                    </List>
                  </div>
                </Grid>
  */}
            </div>
            
        </div>
        
      
    </div>
  );
}
}
 
MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(MainContent);