import React from 'react';
import ReactDOM from 'react-dom';
import bookData from './bookData'
import App from './App'


ReactDOM.render(<App bookData={bookData}/>, document.getElementById('root'));