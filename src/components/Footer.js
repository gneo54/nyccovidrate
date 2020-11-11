import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Ad from '../components/Ad';
import Link from '@material-ui/core/Link';
import {
  Icon
} from "tabler-react";


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  footer: {
    backgroundColor: theme.palette.background.paper
  }
});
 
function Footer(props) {
  const { classes } = props;
 
  return (
    <footer className={classes.footer}>
      
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">    
        For Inquiries, Contact <a href={'mailto:info@nyccovidrate.com'}>info@nyccovidrate.com</a> | <Link color="inherit" href="https://twitter.com/NYCRate"><Icon prefix="fe" name="twitter" /></Link>
          
        </Typography>
        <Typography component="p">
        © 2020 All Rights Reserved 
        </Typography>
        
        
      </Paper>
    </footer>
  );
}
 
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Footer);