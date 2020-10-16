import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css';
import AdSense from 'react-adsense';

class Home extends Component {

  render() {

    return (
      <div className="App">
        {/*<Header />*/}
        <MainContent />
       
        
        <Footer/>      
        </div>
    );
  }
}



export default Home;




