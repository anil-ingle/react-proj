import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'toastr/build/toastr.css';
import MainContent from './main/MainContent';
import store from './main/store';
import * as toastr from 'toastr';
import '../src/component/login/style/style.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const render = () => {
  toastr.options.showDuration = 300;
  toastr.options.positionClass = 'toast-top-center';
  toastr.options.closeButton = true;
  ReactDOM.render(
    <Provider store={store(history)}>
      <ConnectedRouter history={history}>
        <MainContent />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
};

render();

registerServiceWorker();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./index', () => {
    render();
  });

}