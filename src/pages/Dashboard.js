import React from "react";
import { connect } from "react-redux";
import { alertActions, employeeActions } from "../actions";
import Content from "../components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";
import { history } from "../helpers";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dashboard",
    };
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  componentDidMount = () => {
    this.props.getAllEmployees();
  };

  render() {
    const { employees, alert, view } = this.props;

    return (
      <div className="container" style={{ padding: "25px 0px 0px 0px" }}>
        <h2>REACT REDUX and Lumen Framework Simple Employees App.</h2>
        <Content employees={employees} alert={alert} view={view} />
      </div>
    );
  }
}

const mapState = (state) => {
  const { employees, alert, view } = state;
  return { employees, alert, view };
};

const actionCreators = {
  getAllEmployees: employeeActions.getAllEmployees,
  clearAlerts: alertActions.clear,
};

const connectedDashboard = connect(mapState, actionCreators)(Dashboard);
export { connectedDashboard as Dashboard };
