import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>LittleJohn</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route path="/" render={() => <div>TODO</div>} />
    </Switch>
  </div>
);

export default App;