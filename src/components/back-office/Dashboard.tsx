import React from "react";
import SideBar from "./SideBar";
import Panel from "./Panel";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <Panel />
    </div>
  );
};

export default Dashboard;
