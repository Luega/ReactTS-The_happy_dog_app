import React, { useState } from "react";
import classes from "../../style/back-office/Dashboard.module.css";
import Panel from "./Panel";
import CreatePuppy from "./form/CreatePuppy";
import Button from "../Generic/Button";

const Dashboard = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);

  const createModalHandler = () => {
    setCreateModal(!createModal);
  };

  return (
    <div
      className={`${classes.dashboard} w-4/5 flex flex-col rounded-md overflow-scroll relative shadow-lg`}
    >
      <Button
        className={`${classes.createButton} p-3 border sticky top-0 shadow-sm`}
        buttonText="Create"
        buttonIcon=""
        onClick={createModalHandler}
      />
      {createModal && <CreatePuppy handlerFn={createModalHandler} />}
      <Panel />
    </div>
  );
};

export default Dashboard;
