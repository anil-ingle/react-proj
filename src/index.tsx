import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainContent from './main/MainContent';
import store from './main/store';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const render = () => {
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