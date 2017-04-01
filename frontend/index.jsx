


import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  // let store;
    // if (window.currentUser) {
    // const preloadedState = {session: {currentUser: window.currentUser}};
    // store = configureStore(preloadedState);
    // } else {
    // }
    let store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // window.store = store;


    // const root = document.getElementById('root');
    // ReactDOM.render(<h1>Welcome to Rooster Grin Medical!</h1>, root);
});
