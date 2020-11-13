import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ResponsiveDrawer from './ResponsiveDrawer';
import ResponsiveDraw from './ResponsiveDraw';
import HttpsApp from './components/HttpsApp'

ReactDOM.render(
  <React.StrictMode>
     
     <HttpsApp/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
