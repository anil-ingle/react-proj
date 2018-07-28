import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginPage from './component/LoginPage';
import registerServiceWorker from './registerServiceWorker';
import store from './main/store';

ReactDOM.render(
    <Provider store={store({})}>
      <LoginPage/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();