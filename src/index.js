import React from 'react';
import ReactDOM from 'react-dom';
import Table from './pages/Table';
import History from './pages/History';
import { browserHistory, Route, Router, Redirect } from 'react-router';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Table} />
    <Route path="/historico" component={History} />
    <Redirect path="**" to="/" />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
