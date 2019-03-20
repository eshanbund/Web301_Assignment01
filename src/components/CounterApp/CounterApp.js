import React, { Component }  from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './CounterApp.module.css';
import FormApp from '../../components/FormApp/FormApp';
import ListingDB from '../ListingDB/ListingDB';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class CounterApp extends Component{

constructor(props)
{
    super(props);
    this.state={
        counter: this.props.initCounter,
        list: [''],
        NameSubmittedTxt:'',
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    };
    this.handleClickUp = this.handleClickUp.bind(this);

    /* handking form*/
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSnackClick = this.handleSnackClick.bind(this);
    
}

handleSnackClick = state => () => {
    this.setState({ open: true, ...state });
  };  

/* Snack Bar */

handleClose = () => {
    this.setState({ open: false });
  };
/* Snack Bar */



handleClickUp(e){
    //alert('hello');
    this.setState({counter:this.state.counter+1});
}
handleClickDown(e){
    //alert('hello');
    this.setState({counter:this.state.counter-1<0 ? 0: this.state.counter-1 });
}
/* Start Form Handling*/
handleSubmit = (event) => {
    event.preventDefault();   
}

handleOnChange= (event) => {
   // event.preventDefault();
    //alert("test"+ event.target.value );
    this.setState({
        NameSubmittedTxt: event.target.value }) 
      
}


handleButtonClick=(event)=>{

    if (this.state.counter>0 || this.state.NameSubmittedTxt=='') {


        this.setState({
            NameSubmittedTxt: event.target.value }) 
        const NameSubmittedTxt= this.state.NameSubmittedTxt;
        // alert("test => " + this.state.NameSubmittedTxt + ' | ' + this.state.counter);
        //this.setState({list:this.state.list.concat(this.state.NameSubmittedTxt )});
        this.setState({list:[...this.state.list, NameSubmittedTxt + ' | ' + this.state.counter ]});

        /* clean after submit and set counter back to 0*/ 
        this.setState({
        NameSubmittedTxt:'',
        counter :0
        }) ;


        this.setState({ open: true,        vertical: 'bottom',
        horizontal: 'right' });
        setTimeout( this.handleClose,5000);
    }
  
};


/* End Form Handling*/




handleClickUp(e){
    //alert('hello');
    this.setState({counter: this.state.counter+1});
}

    render(){

        const { vertical, horizontal, open } = this.state;
      
        return(
   



                    /*  Counter area */ 
                    <div className={styles.General}>    

                <Paper elevation={2} style={{height:350, width:'90%', padding:5}}>               
                                 
                    <p onClick={ (e)=> {this.handleClickUp("")}}   > ^</p>  
                    <p> {this.state.counter}</p> 
                    {/* condition to display Down arrow */}
                    {this.state.counter > 0 ?
                            <p onClick={ (e)=> {this.handleClickDown("")}}   className={styles.BottomBut} > ^</p> 
                            :
                            '' 
                    }                 

                </Paper>
                <Paper elevation={2} style={{height:50, width:'90%', padding:5}}> 

                    {/*  form area */ }
                    <form onSubmit={this.handleSubmit}>    
                        <TextField  id="NameSubmitted" value={this.state.NameSubmittedTxt} onChange={this.handleOnChange}/>
                        <Button variant="contained" color="primary" onClick={this.state.NameSubmittedTxt.length>0 ? this.handleButtonClick :''} >
                            Submit
                        </Button>
                    </form>
                    </Paper>
            
                    {/*  Table Display*/ }   
                    <ListingDB>{ this.state.list }</ListingDB>
                

                    {/*  Snack bar */ }   
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={open}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">This is a successful message</span>}
                    />


            </div> 
            );
        }
}

export default CounterApp;