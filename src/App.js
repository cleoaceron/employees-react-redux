import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "./helpers";
import { alertActions } from "./actions";
import { PrivateRoute } from "./components";
import { Dashboard } from "./pages/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Router history={history}>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
            {/* <PrivateRoute exact path="/users/:id" component={View} /> */}
            <Route path="/" component={Dashboard} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
