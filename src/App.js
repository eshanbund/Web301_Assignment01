import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';


// my components lists
import FormApp from './components/FormApp/FormApp';

import AppBarTop from './components/AppBarTop/AppBarTop';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <FormApp />
      </div>
    );
  }
}

export default App;
