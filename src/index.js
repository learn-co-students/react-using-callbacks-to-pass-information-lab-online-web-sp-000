import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));


//import split code into smaller files modular code 
//import functions 
//matrix only thing rendered passed a values prop
//each pixel is actually a div 
//data used to create the divs comes from src/data.js
//stored in array of strings 