import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer'
import Header from './components/Header'
import AboutContent from './components/AboutContent'
import './App.css';
import AdSense from 'react-adsense';

class About extends Component {

  render() {

    return (
      <div className="App">
        {/*<Header />*/}
        <AboutContent />
       
        
        <Footer/>      
        </div>
    );
  }
}



export default About;




