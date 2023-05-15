import React, { useState } from "react";
import { Puppy } from "../../types";
import Button from "../Generic/Button";
import Modal from "../Generic/Modal";
import UpdatePuppy from "./form/UpdatePuppy";

type Props = {
  puppy: Puppy;
};

const Card = (props: Props) => {
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const updateModalHandler = () => {
    setUpdateModal(!updateModal);
  };

  const deleteModalHandler = () => {
    setDeleteModal(!deleteModal);
  };

  const deletePuppy = () => {
    fetch(`http://localhost:3001/api/puppies/${props.puppy.slug}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((results) => console.log(results))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <img src={props.puppy.image?.replaceAll("&#x2F;", "/")} alt="" />
      <h1>{props.puppy.name}</h1>
      <h3>{props.puppy.breed}</h3>
      <h4>{props.puppy.birthDate}</h4>
      <h4>{props.puppy.info}</h4>
      <Button className="" buttonText="Update" onClick={updateModalHandler} />
      {updateModal && <UpdatePuppy puppy={props.puppy} />}
      <Button className="" buttonText="Delete" onClick={deleteModalHandler} />
      {deleteModal && (
        <Modal
          title="DELETE PUPPY"
          message="Do you want to delete this puppy?"
          onActionHandler={deletePuppy}
          onCancelHandler={deleteModalHandler}
        />
      )}
    </div>
  );
};

export default Card;
