

// react
import React from 'react';
import { Provider } from 'react-redux';

// react/Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// containers
import App from './app';
import MainContainer from './main/main_container';

// actions
import { requestAllPatients } from '../actions/patients_actions';


const Root = ({store}) => {

  const getAllPatients = () => {
    store.dispatch(requestAllPatients());
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ="/" component={App}>
          <IndexRoute component={MainContainer} onEnter={getAllPatients}/>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
