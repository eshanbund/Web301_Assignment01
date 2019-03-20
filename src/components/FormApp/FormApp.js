import React , { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBarTop from '../../components/AppBarTop/AppBarTop';
import CounterApp from '../../components/CounterApp/CounterApp';
import ListingDB from '../../components/ListingDB/ListingDB';



class FormApp extends Component {
    render(){
        return (
            <Paper elevation={5} >
            <AppBarTop/>
           <Grid container sm={12} style={{padding:10}}>
               {/* Counter paper */}
               <Grid  item sm>
               <CounterApp initCounter={0} ></CounterApp>
 
                {/* Counter form */} 
  
               </Grid>
 
 
               {/* Counter list */} 
               <Grid  item sm>
                   <Paper elevation={2} style={{height:420}}> 
                
                     </Paper>
               </Grid>
           </Grid>
         </Paper>
        );
    }
}

export default FormApp;