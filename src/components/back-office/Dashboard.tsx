import React, { useState } from "react";
import Panel from "./Panel";
import CreatePuppy from "./form/CreatePuppy";
import Button from "../Generic/Button";

const Dashboard = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);

  const createModalHandler = () => {
    setCreateModal(!createModal);
  };

  return (
    <div>
      <Button
        className=""
        buttonText="Create new"
        onClick={createModalHandler}
      />
      {createModal && <CreatePuppy />}
      <Panel />
    </div>
  );
};

export default Dashboard;
