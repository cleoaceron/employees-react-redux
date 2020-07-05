import React from "react";
import { connect } from "react-redux";
import { userActions } from "../actions";
import Content from "../components/Content";
import "../assets/css/App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dashboard",
    };
  }

  componentDidMount = () => {
    this.props.getUsers();
  };

  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <h2>REACT REDUX Simple Search App.</h2>
        <Content users={users} />
      </div>
    );
  }
}

const mapState = (state) => {
  const { users } = state;
  return { users };
};

const actionCreators = {
  getUsers: userActions.getAllUsers,
};

const connectedDashboard = connect(mapState, actionCreators)(Dashboard);
export { connectedDashboard as Dashboard };
