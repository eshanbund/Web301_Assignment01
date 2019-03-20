import React, { Component }  from 'react';
import Typography from '@material-ui/core/Typography';
//import styles from './CounterApp.module.css';
import FormApp from '../../components/FormApp/FormApp';
import ListingDB from '../ListingDB/ListingDB';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });


class CounterAppTemplate extends Component{

    render()
    {
       return(
            <div >  



 

















            </div> 
            );
        }
}


export default CounterAppTemplate;
