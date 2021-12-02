import App from 'components/app/app';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from 'redux';
import { reducer } from 'store/reducer';
import { render } from 'react-dom';

const store = createStore(
  reducer,
  composeWithDevTools(),
)

render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
