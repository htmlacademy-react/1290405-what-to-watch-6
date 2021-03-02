import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {AuthorizationStatus} from './const';
import {ActionCreator} from './store/action';
import {createAPI} from './services/api';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import App from './components/app/app';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
    .concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
