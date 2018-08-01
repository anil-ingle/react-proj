import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainContent from './main/MainContent';
import store from './main/store';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Provider store={store({})}>
    <MainContent isValid={false}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();