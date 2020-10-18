import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Moment from 'react-moment';
import 'moment-timezone';



const useStyles = theme => ({
  depositContext: {
    flex: 1,
  },
});
/* 
state = {
    covidresults: []
  }

const apikey = 'f520d97958136bfe05e464c4ec9af3da15dcd';

componentDidMount() {

     Http.dispatchRequest(url, userId, true, '', 'GET')
            .then((response) => response.json())
            .then((responseJson) => {


                this.setState({
                    userRole: responseJson.role
                });
            })
            .catch((error) => {
                toast.error(error);
            });
    axios.get(`https://nyccovid-aba5.restdb.io/rest/covidtests`, { headers: { 'x-apikey': apikey } })
        .then(res => {
        const covidresults = res.data;
        this.setState({ covidresults });
        })
    } */


//export default function Deposits() {
    const apikey = '5f7be4cf0acc087071bbf447';
class Deposits extends Component {    

    constructor(props) {
        super(props);
        this.state = {
            lastTestResult : {},
            IsLoading : true

        }

    }
    componentDidMount() {

        let apiUrl = `https://nyccovid-aba5.restdb.io/rest/covidtests?q={}&h={"$orderby": {"DATE": 1}}`;
    
        fetch(apiUrl, {
            method: 'GET',
            headers: {  'x-apikey': apikey }
        }).then((response) => response.json())
        .then((responseJson) => {
          
            if (responseJson){
              let resLength = responseJson.length;
              console.log(responseJson[resLength-1]);
              this.setState({
                  lastTestResult: responseJson[resLength-1],
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
        
        const { classes, headerTitle, extractField } = this.props;
        const { lastTestResult } = this.state;

  return (
      
    <React.Fragment>
      <Title>{headerTitle}</Title>
      {this.state.IsLoading && (
          <Title>{'Fetching...'}</Title>
      )}
      {!this.state.IsLoading && (
      <Typography component="p" variant="h4">
        
        {new Intl.NumberFormat('en-US', { maximumFractionDigits: 4, minimumFractionDigits: 2 }).format(lastTestResult[extractField] * 100)}%    
        
        {/*covidresults*/}
      </Typography>)
    }
    {!this.state.IsLoading && (
      <Typography color="textSecondary" className={classes.depositContext}>
        For { }
        <Moment add={{ hours: 5 }} format="MM-DD-YYYY">
        {lastTestResult.DATE}
            </Moment>
            
      </Typography>
      )
    }
    </React.Fragment>
  );
 }

}

Deposits.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles)(Deposits);