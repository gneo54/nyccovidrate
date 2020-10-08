import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import './App.css';
import AdSense from 'react-adsense';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Home />
       
        
        <Footer/>      
        </div>
    );
  }
}



export default App;




