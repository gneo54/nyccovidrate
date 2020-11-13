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
import MetricStat from './components/MetricStat';
import Moment from 'react-moment';
import moment from 'moment';
import nyclogo from './nyclogo.svg';

import "tabler-react/dist/Tabler.css";

import {
  Page,
  Avatar,
  Icon,
  Grid as trGrid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import AmzAd from './components/AmzAd';

const useStyles = ((theme) => ({
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
  ads: {
    marginTop: theme.spacing(3),
    overflow: 'auto',
    overflowX: 'hidden',
    overflowY: 'hidden'
  }
}));
const footers = [
  {
    title: 'Resources',
    description: [{title: 'Find Your Zone', link: 'https://NYC.gov/COVIDZone'},
    {title: 'NYC DOE School Based Testing Report', link: 'https://healthscreening.schools.nyc/surveytesting'}],
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

const apikey = '5f7be4cf0acc087071bbf447';

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
        lastTestResult : {},
        oldLastTestResult: {},
        IsLoading : true

    }

}
componentDidMount() {

    let apiUrl = `https://nyccovid-aba5.restdb.io/rest/nyccovid-extended?q={}&h={"$orderby": {"date": 1}}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {  'x-apikey': apikey }
    }).then((response) => response.json())
    .then((responseJson) => {
      
        if (responseJson){
          let resLength = responseJson.length;
          
          this.setState({
              lastTestResult: responseJson[resLength-1],
              oldLastTestResult: responseJson[resLength-2],
              IsLoading: false
          });
        }
    })
    .catch((error) => {
        //toast.error(error);
        console.log(error);
    });     
  }

  render() {
    //const classes = useStyles();
    const {classes} = this.props;
    const { lastTestResult, oldLastTestResult, IsLoading } = this.state;
    let formattedAsOfDate = '', dateRefreshed = '';
    let dailyNet = 0;
    let sevenDayNet = 0;
    let dailyCasesAmt = 0;
    let dailyCasesPct = 0;
    let dailyHospitalizationAmt = 0;
    let dailyHospitalizationPct = 0;
    if (!IsLoading){
      formattedAsOfDate = (moment(lastTestResult.date)).add(5, 'h').format('MM-DD-YYYY');
      dateRefreshed = (moment(lastTestResult.date_refreshed)).add(5, 'h').format('MM-DD-YYYY');
      dailyNet = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(((lastTestResult.daily_positive - oldLastTestResult.daily_positive) / oldLastTestResult.daily_positive) * 100);
      sevenDayNet = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(((lastTestResult.seven_day_positive - oldLastTestResult.seven_day_positive) / oldLastTestResult.seven_day_positive) * 100);
      dailyCasesAmt = lastTestResult.daily_cases;
      dailyCasesPct = (lastTestResult.daily_cases / 550 ) * 100;
      dailyHospitalizationAmt=lastTestResult.hospital_admissions;
      dailyHospitalizationPct = (lastTestResult.hospital_admissions / 200)* 100;
    }
    
    

    return (
      <div className="App">

        {/*<Header /> <MainContent />*/}
        
       
        <CssBaseline />
        
        
        <Page.Content title={IsLoading ? "Fetching..." : "As of " + formattedAsOfDate } subTitle={IsLoading ? "..." : "refreshed on " +dateRefreshed}>
        {/*<Alert type="primary">
            with code samples.
        </Alert>
         */}
        <trGrid.Row cards={true}>
          <trGrid.Col width={12} sm={12} lg={6}>
            <MetricStat IsLoading={IsLoading} metricLabel="NYC Daily Positivity Rate" metricValue={lastTestResult.daily_positive} netChangeValue={dailyNet}/>
            
          </trGrid.Col>
          <trGrid.Col width={12} sm={12} lg={6}>
            <MetricStat IsLoading={IsLoading} metricLabel="NYC 7 Day Avg Positivity Rate" metricValue={lastTestResult.seven_day_positive} netChangeValue={sevenDayNet}/>
          </trGrid.Col>
        </trGrid.Row> 
        <trGrid.Row cards={true}>
          <trGrid.Col width={12} sm={12} lg={6}>

          <ProgressCard
            header="Daily reported cases of COVID-19, 7-Day Avg against Threshold"
            content={dailyCasesAmt}
            progressColor={(dailyCasesPct) < 33 ? "green" : (dailyCasesPct) < 66 ? "orange" : "red"}
            progressWidth={dailyCasesPct}
            />
          </trGrid.Col>
          
          <trGrid.Col width={12} sm={12} lg={6}>
          <ProgressCard
            header="Daily number of people admitted to NYC hospitals for COVID-19-like illness against Threshold"
            content={dailyHospitalizationAmt}
            progressColor={(dailyHospitalizationPct) < 33 ? "green" : (dailyHospitalizationPct) < 66 ? "orange" : "red"}
            progressWidth={dailyHospitalizationPct}
            />
          </trGrid.Col>
          
        </trGrid.Row> 
        
        
        
          </Page.Content>
          {/*
        <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <Button color="primary">A Button</Button>
        </Card.Body>
      </Card>
          */}

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
        
        <Container maxWidth="md" component="ads" className={classes.ads}>
          
          <AmzAd />
        
        </Container>
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




