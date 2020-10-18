import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css';
import AdSense from 'react-adsense';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
const footers = [
  {
    title: 'Resources',
    description: [{title: 'Find Your Zone', link: 'https://NYC.gov/COVIDZone'}],
  },
  {
    title: 'Source',
    description: [{title: 'Data', link: 'https://github.com/nychealth/coronavirus-data'}, {title: 'Github', link: 'https://github.com/gneo54/nyccovidrate'}],
  },
  {
    title: 'About',
    description: [{title: 'Donate', link: '/about'}],
  },
  {
    title: 'Charts',
    description: [{title: 'See Charts', link: 'https://public.tableau.com/profile/integrated.data.team#!/vizhome/COVID-19UpdatedPublicHealthMilestones/TestinginNYC'}],
  },
];

class Home extends Component {


  
  render() {
    //const classes = useStyles();
    const {classes} = this.props;

    return (
      <div className="App">
        {/*<Header /> */}
        <MainContent />
       
        <CssBaseline />
        
        
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.title}>
                    <Link href={item.link} variant="subtitle1" color="textSecondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Box mt={5} className="App">
            {/*<Copyright />*/}
            <Footer/>      
          </Box>
        
        </Container>
             
        </div>
    );
  }
}



//export default Home;
export default withStyles(useStyles)(Home);




