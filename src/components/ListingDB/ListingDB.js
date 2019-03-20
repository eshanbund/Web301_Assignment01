import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 250,
  },
});

let id = 0;
function createData(name, counter) {
  id += 1;
  return { id, name, counter };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237)
  

];

function ListingDB(props) {
 const { classes } = props;
 console.log(props.children);


  return (

           
    props.children.length>1 ?
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>

            <TableCell>Counter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(list => ( */}
            
            
              {props.children.map(item => (

        item.length>0 ? 
                <TableRow >
                  <TableCell align="left">
                      {item.split('|')[0]}
                  </TableCell> 
                  <TableCell> 
                  {item.split('|')[1]}
                  </TableCell> 
                  </TableRow>
                  :''
                  ))}             
                         
          {/* ))} */}
        </TableBody>
      </Table>
      :
      ''
      
  );
}


ListingDB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingDB);