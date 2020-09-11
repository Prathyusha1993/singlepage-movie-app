import React, {Component} from 'react';
import './App.css';
import Movie from './components/movie';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

 class App extends Component {
   render(){
     return(
       <Movie />
     );
   }
  }

export default App;