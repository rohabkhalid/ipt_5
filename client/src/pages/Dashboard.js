import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

function Dashboard() {
  const location = useLocation();
  const mUser = location.state;

  if (mUser == null) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="dashboard">
        <AddTask email={mUser.email} />
        <TaskList email={mUser.email} />
      </div>
    );
  }
}

export default Dashboard;
