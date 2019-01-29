import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

module.hot && module.hot.accept();
render( <Hello/>, document.getElementById('root'));