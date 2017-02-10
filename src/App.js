//@flow
import './app.css'
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';

import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.js';

const mountNode = document.getElementById('root');

ReactDOM.render(<Layout />, mountNode);
