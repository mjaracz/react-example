import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

import './index.css';

import {Provider} from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
  <MuiThemeProvider>
	  <Provider store={store}>
      <App />
	  </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root'));
registerServiceWorker();
