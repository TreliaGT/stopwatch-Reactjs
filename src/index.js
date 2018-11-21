import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Login />, document.getElementById('root'));


registerServiceWorker();
