import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Provider } from 'react-redux';
import store from './store';
const App = (
    <Provider store={store}>
        <Hello />
    </Provider>
);

module.hot && module.hot.accept();
render(App, document.getElementById('root'));
