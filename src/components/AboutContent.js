import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';


import {
  Page, Icon
} from "tabler-react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  donateButton:{
    height: '40px',
    color: 'white',
    background: '#3f51b5',
    border:  'none',
    borderRadius: '2px',
    fontWeight: 'bold',
    
    //margin: theme.spacing.unit * 2,
    //width: '100%',
    transition: 'box-shadow 150ms ease-out'
  }
}));


const donateOptions = [
  {
    title: 'Coffee',
    price: '2',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Donate',
    buttonVariant: 'contained',
  },
  {
    title: 'Groceries',    
    price: '100',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Donate',
    buttonVariant: 'contained',
  },
  {
    title: 'Pizza',
    price: '10',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Donate',
    buttonVariant: 'contained',
  }
];
class AboutContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        donationOptions: donateOptions,
        cbOptions: {"pricing_type": "fixed_price",
                    "local_price": { "amount": "100.0", "currency": "USD" },
                    "description": "test desc"
                  }

    }

}
 

  render() {
    const {classes} = this.props;
    const { donationOptions, cbOptions } = this.state;
    
  return(<div>
    
    <Page.Content title="Support Us">
      <Container maxWidth="md" component="main">
      
        
        <Typography variant="h6" align="center" color="textSecondary" component="p">
        I built this for New Yorkers who are looking for transparent data on the daily and 7 day positive COVID-19 rate in NYC.
        
        </Typography>
        <p />
        <Typography variant="h6" align="center" color="textSecondary" component="p">
        
        My wife is a teacher in NYC and the NYC Dept of Education has a threshold that if the positivity of cases goes past 3%, they will close all public schools.
        I built this site so teachers (and any New Yorker) can check it every day.
        
        Donate with Paypal {<p /> }
        <Link color="inherit" href="https://www.paypal.com/donate?hosted_button_id=M3YA33XLA9UVQ&source=url/">
                
                  <Icon prefix="payment" name="paypal-dark" />
                  </Link>
                  {<p /> }or with Crypto Below{<p /> }
        </Typography>    
        
        
      </Container>
      
    

      <Container maxWidth="md" >
      
        <Grid container spacing={5} alignItems="flex-end">
        
          {donationOptions.map((tier) =>  ( 
            
            
            <Grid item key={tier.title} xs={12} sm={tier.title === 'AGroceries' ? 12 : 6} md={4}>
              
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'AGroceries' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    
                  </div>
                  
                </CardContent>
                <CardActions>
                
                <CoinbaseCommerceButton className={classes.donateButton}  checkoutId={'3fc13d9e-93b1-424c-aecd-885b1dd0bfb0'}>Donate</CoinbaseCommerceButton>
                
          
                
                  {/*<Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
          </Button>*/}
                </CardActions>
              </Card>
            </Grid>
            
          ))}
        </Grid>
        
      </Container>
      
      <Container maxWidth="md" component="footer" className={classes.footer}>
        
        <Box mt={5} className="App">
          
          <Footer/>      
        </Box>
      </Container>
      </Page.Content>
      </div>);}
}


AboutContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(useStyles)(AboutContent);
