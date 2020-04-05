import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route} from 'react-router';
import history from './history';
import UserInfo from './User/UserInfo';
import UserList from './User/UserList';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/user_list" component={UserList} />
      <Route path="/user_info/:id" component={UserInfo} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
