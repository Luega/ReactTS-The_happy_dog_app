import React from "react";
import classes from "../../style/back-office/Backoffice.module.css";
import Dashboard from "./Dashboard";

const Backoffice = () => {
  return (
    <div
      className={`${classes.backoffice} w-full h-screen py-12 flex justify-center items-center`}
    >
      <Dashboard />
    </div>
  );
};

export default Backoffice;
