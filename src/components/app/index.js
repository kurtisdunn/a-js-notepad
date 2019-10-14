import '../../scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap';
import { HashRouter as Router, Route, Switch, IndexRoute, hashHistory, Redirect } from 'react-router-dom';

import Home from '../../views/home';
import Login from '../../views/login';

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: true
    }
  }

  render(){
    return(
    <Router>
      <Switch>
      <Route path="/login" component = {Login} />} />
      <PrivateRoute authed={ this.state.authed } path='/'  component = {Home} />

      </Switch>
    </Router>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
