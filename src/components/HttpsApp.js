import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import ResponsiveDraw from '../ResponsiveDraw';
// you can just wrap your entire app to redirect it to the equivalent https version
// for example:
// http://example.com/    =>    https://example.com/
 
// you can also use a "disabled" prop to dinamically disable it
// <HttpsRedirect disabled={...}>
 
class HttpsApp extends React.Component {
 
  render() {
    return (
      <HttpsRedirect>
        <ResponsiveDraw />
        </HttpsRedirect>
    );
  }
}
export default HttpsApp;