//@flow
import './app.css'
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';
import { Button } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.js';

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

const mountNode = document.getElementById('root');

ReactDOM.render(<ButtonExampleEmphasis />, mountNode);
