
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = ((theme) => ({
   
    amzAd: {
      overflow: 'auto',
      overflowX: 'hidden',
      overflowY: 'hidden'
    }
  }));

class AmzAd extends React.Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=8fee1549-47b1-4f1c-860f-ce5e2a00dc70";
        script.async = true;
    
        document.body.appendChild(script);
    }
    

render () {
    const {classes} = this.props;
    return ( 

        <div className={classes.amzAd} id="amzn-assoc-ad-8fee1549-47b1-4f1c-860f-ce5e2a00dc70"> </div>

    );
  }
}

export default withStyles(useStyles)(AmzAd);