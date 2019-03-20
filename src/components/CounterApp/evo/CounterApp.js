import React, { Component }  from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './CounterApp.module.css';
import FormApp from '../../components/FormApp/FormApp';
import ListingDB from '../ListingDB/ListingDB';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CounterApp extends Component{

constructor(props)
{
    super(props);
    this.state={
        counter: this.props.initCounter,
        list: [''],
        NameSubmittedTxt:'init'
    };
    this.handleClickUp = this.handleClickUp.bind(this);

    /* handking form*/
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    
}

      


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


      this.setState({
        NameSubmittedTxt: event.target.value }) 
const NameSubmittedTxt= this.state.NameSubmittedTxt;
   // alert("test => " + this.state.NameSubmittedTxt + ' | ' + this.state.counter);
   //this.setState({list:this.state.list.concat(this.state.NameSubmittedTxt )});
   this.setState({list:[...this.state.list, NameSubmittedTxt + ' | ' + this.state.counter ]});
 
   

  

};


/* End Form Handling*/




handleClickUp(e){
    //alert('hello');
    this.setState({counter: this.state.counter+1});
}

    render(){


        return(
            <div className={styles.General}>  
               
               <Paper elevation={2} style={{height:350, width:'90%', padding:5}}>

                    




                <p onClick={ (e)=> {this.handleClickUp("")}}   > ^</p>  
                {/* <fragment  onClick={ (e)=> {this.handleClickUp("")}}  > ^</fragment  > */}
                {/* <p> {this.state.counter < 1 ?'e':'N'}</p>  */}
                <p> {this.state.counter}</p> 
                {/* condition to display Down arrow */}
                {this.state.counter > 0 ?
                    <p onClick={ (e)=> {this.handleClickDown("")}}   className={styles.BottomBut} > ^</p> 
                    :'' }                 

            <br/>    
   </Paper>
            <Paper elevation={2} style={{height:50, width:'90%', padding:5}}> 
                 
              
            <form onSubmit={this.handleSubmit}>
                <Grid container xs={12} justify={'center'}style={{padding:5}}>
                    <Grid  item xs={6}>
                        <TextField  id="NameSubmitted" value={this.state.NameSubmittedTxt} onChange={this.handleOnChange}/>
                    </Grid>

                    <Grid  item xs={6} >
                        <Button variant="contained" color="primary" onClick={this.handleButtonClick} >
                            Submit
                        </Button>
                        {/* {this.state.NameSubmittedTxt} */}
                    </Grid>
                </Grid>
                </form>
                </Paper>


                <Grid  item sm>
                    <Paper elevation={2} style={{height:420}}> 
                    <ListingDB>{ this.state.list }</ListingDB>
                        {console.log(this.state.list )}
                      </Paper>
                </Grid>

            </div> 
            );
        }
}

export default CounterApp;