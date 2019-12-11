import React, { Component } from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './components/home/Landing';
import store from './store'

// we can't returm nulituple items, we have to find put child

class App extends Component{
  render() {
      return ( 
        <Provider store ={store}> 
          <Navbar />
          <Landing></Landing>
          <Footer/> 
        </Provider>

      );
      }
}




export default App;
